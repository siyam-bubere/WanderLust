// 1. Add this at the very top to load your .env file
if (process.env.NODE_NODE_ENV !== "production") {
    require('dotenv').config({ path: '../.env' }); // Points to .env in the parent folder
}

const mongoose = require("mongoose");
const Listing = require("../models/listing.js"); 
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

// 2. Use the token from your .env file
const mapToken = process.env.MAP_TOKEN; 

const geocodingClient = mbxGeocoding({ accessToken: mapToken });

async function updateExistingListings() {
    // 3. Connect to DB
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
    console.log("Connected to DB...");

    const listings = await Listing.find({});

    for (let listing of listings) {
        // Skip if geometry already exists and is valid
        if (listing.geometry && listing.geometry.coordinates.length > 0) {
            console.log(`Skipping: ${listing.title} (Already has coordinates)`);
            continue;
        }

        console.log(`Geocoding: ${listing.location}...`);
        
        try {
            let response = await geocodingClient
                .forwardGeocode({
                    query: `${listing.location}, ${listing.country}`,
                    limit: 1,
                })
                .send();

            if (response.body.features.length > 0) {
                listing.geometry = response.body.features[0].geometry;
                await listing.save();
                console.log(`✅ Updated ${listing.title}`);
            } else {
                console.log(`❌ No results found for ${listing.location}`);
            }
        } catch (err) {
            console.error(`⚠️ Error updating ${listing.title}:`, err.message);
        }
    }

    console.log("Done!");
    mongoose.connection.close();
}

updateExistingListings();