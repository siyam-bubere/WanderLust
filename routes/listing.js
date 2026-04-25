const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingController.index)) //Index
    .post(isLoggedIn, upload.single('listing[image][url]'), validateListing, wrapAsync(listingController.createListing)); //Create

router.get("/new", isLoggedIn, upload.single('listing[image][url]'), listingController.renderNewForm); //New

router.route("/:id")
    .get(wrapAsync(listingController.showListing)) //Show
    .put(isLoggedIn, upload.single('listing[image][url]'), isOwner, validateListing, wrapAsync(listingController.updateListing)) //Update
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing)); //Delete

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editForm));


module.exports = router;