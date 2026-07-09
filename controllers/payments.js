const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
const Booking = require("../models/booking");

module.exports.initializePayment = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId).populate("listing");
    if (!booking) {
      req.flash("error", "Booking record not found!");
      return res.redirect("/listings");
    }

    if (booking.user.toString() !== req.user._id.toString()) {
      req.flash("error", "Unauthorized access!");
      return res.redirect("/listings");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: `Wanderlust Booking: ${booking.listing.title}`,
            description: `Check-in: ${booking.checkIn.toLocaleDateString()} | Check-out: ${booking.checkOut.toLocaleDateString()}`
          },
          unit_amount: Math.round(booking.totalPrice * 100)
        },
        quantity: 1
      }],
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/bookings/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.protocol}://${req.get('host')}/listings/${booking.listing._id}`
    });

    booking.stripeSessionId = session.id;
    await booking.save();

    res.redirect(303, session.url);
  } catch (err) {
    req.flash("error", `Payment initialization failed: ${err.message}`);
    res.redirect("/listings");
  }
};

module.exports.paymentSuccess = async (req, res) => {
  try {
    const { session_id } = req.query;
    if (!session_id) {
      req.flash("error", "Payment verification session missing.");
      return res.redirect("/listings");
    }

    const booking = await Booking.findOne({ stripeSessionId: session_id }).populate("listing");
    if (!booking) {
      req.flash("error", "Booking record not found.");
      return res.redirect("/listings");
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status === 'paid') {
      booking.status = "Paid";
      await booking.save();
      
      res.render("bookings/success.ejs", { booking });
    } else {
      req.flash("error", "Booking payment was not completed.");
      res.redirect(`/listings/${booking.listing._id}`);
    }
  } catch (err) {
    req.flash("error", `Verification failed: ${err.message}`);
    res.redirect("/listings");
  }
};
