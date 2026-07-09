const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.createBooking = async (req, res) => {
  const { id } = req.params;
  const { checkIn, checkOut } = req.body.booking;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  
  if (checkOutDate <= checkInDate) {
    req.flash("error", "Check-out date must be after Check-in date!");
    return res.redirect(`/listings/${id}`);
  }

  const timeDiff = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
  const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const totalPrice = numDays * listing.price;

  const booking = new Booking({
    listing: listing._id,
    user: req.user._id,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    totalPrice: totalPrice,
    status: "Pending"
  });

  await booking.save();
  res.redirect(`/bookings/${booking._id}/pay`);
};

module.exports.renderMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("listing")
    .sort({ createdAt: -1 });
  res.render("bookings/index.ejs", { bookings });
};
