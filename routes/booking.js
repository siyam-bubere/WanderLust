const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");
const { createBooking, renderMyBookings } = require("../controllers/bookings");
const { initializePayment, paymentSuccess } = require("../controllers/payments");

// Create booking
router.post("/listings/:id/bookings", isLoggedIn, wrapAsync(createBooking));

// View user bookings
router.get("/bookings/my-reservations", isLoggedIn, wrapAsync(renderMyBookings));

// Initialize payment redirect
router.get("/bookings/:bookingId/pay", isLoggedIn, wrapAsync(initializePayment));

// Stripe success redirect callback
router.get("/bookings/payment/success", isLoggedIn, wrapAsync(paymentSuccess));

module.exports = router;
