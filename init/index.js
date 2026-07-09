const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
        return initDB();
    })
    .catch((err) => {
        console.log("Initialization failed:", err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    
    // Check or create default listing owner to prevent populate username crashes
    let owner = await User.findOne({ username: "admin" });
    if (!owner) {
        owner = new User({ username: "admin", email: "admin@vjti.ac.in" });
        try {
            owner = await User.register(owner, "admin123");
        } catch (err) {
            owner = await owner.save();
        }
    }

    const updatedData = initData.data.map((obj) => ({
        ...obj, 
        owner: owner._id
    }));

    await Listing.insertMany(updatedData);
    console.log("Data was initialized with default owner:", owner.username);
    mongoose.connection.close();
};