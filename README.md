# Wanderlust (Airbnb Clone)

Wanderlust is a full-stack web application designed as an Airbnb clone, built using the MERN stack paradigm (Express, Node.js, MongoDB, and templated EJS views). It enables users to browse premium travel stays, view locations on interactive maps, leave reviews, and make mock reservations with integrated payment checkouts.

---

## 🛠️ Tech Stack & Services
* **Backend**: Node.js & Express.js
* **Database**: MongoDB & Mongoose ODM
* **View Engine**: EJS (with `ejs-mate` layouts)
* **CSS Framework**: Bootstrap 5
* **Mapping API**: Mapbox SDK
* **Cloud Storage**: Cloudinary (for user-submitted listing images)
* **Payment Gateway**: Stripe API (Test Mode)

---

## 🚀 Key Features

* **Booking Reservation System**: Users can select Check-in and Check-out dates and reserve listings.
* **Dynamic Price Breakdown**: A sticky reservation widget on the listing details page calculates nights, rate totals, and final costs dynamically on the client side.
* **Stripe Payment Checkout (Test Mode)**: Reserves stays securely using mock checkout sessions.
* **Pre-Geocoded Listings**: Multi-city database seeder containing locations like Goa, Mumbai, Manali, Jaipur, Paris, NYC, Kyoto, and Bora Bora with pre-configured Mapbox coordinates.
* **Reviews & Ratings**: Leave star-ratings and written comments on listing pages, protected by owner authorization.
* **Responsive Layouts**: Designed with adaptive grid columns and smooth hover zoom scaling and shadow elevations.

---

## 📂 Project Structure
```
wanderlust/
├── controllers/
│   ├── listings.js         # Listings CRUD controllers
│   ├── reviews.js          # Reviews creation/deletion
│   ├── users.js            # Sign up / Login sessions
│   ├── bookings.js         # Check-in date validations & cost computations
│   └── payments.js         # Stripe Checkout sessions creation & confirmation
├── models/
│   ├── listing.js          # Mongoose Listing schema
│   ├── review.js           # Review schema
│   ├── user.js             # User profiles (passport-local-mongoose)
│   └── booking.js          # Travel bookings schema
├── routes/
│   ├── listing.js
│   ├── review.js
│   ├── user.js
│   └── booking.js          # Combined checkout, listing booking & payment routes
├── views/
│   ├── listings/           # index, show, edit, new views
│   ├── users/              # login, signup views
│   ├── bookings/           # index (my bookings list), success receipts
│   └── layouts/
│       └── boilerplate.ejs # Shared navbar/footer layout wrapper
├── public/                 # Static stylesheet assets & frontend map JS
├── init/
│   ├── data.js             # Multi-city database seeds
│   └── index.js            # Cleans DB, creates admin owner, inserts seeds
├── app.js                  # Main server setup and database connection
├── .env.example            # Configuration placeholders template
└── package.json
```

---

## 💻 Installation & Local Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/siyam-bubere/WanderLust.git
   cd WanderLust
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and fill in your details:
   ```bash
   cp .env.example .env
   ```
   *(Note: The app will run locally out-of-the-box using local MongoDB and mock payment keys even if API keys are left as placeholders).*

4. **Seed the Database**:
   Clear existing records and insert default listings and the `admin` owner:
   ```bash
   node init/index.js
   ```

5. **Start Server**:
   ```bash
   node app.js
   ```
   Open `http://localhost:8080` in your web browser.

---

## 🔑 Seed User Logins
You can use the following default account to explore all features after running the seeder:
* **Username**: `admin`
* **Password**: `admin123`
