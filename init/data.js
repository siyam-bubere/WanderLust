const sampleListings = [
  {
    title: "Taj Mahal View Suite",
    description: "Enjoy breathtaking views of the historic Taj Mahal right from your private terrace. This luxury suite offers standard amenities and fine Indian hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Agra",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.0081, 27.1751]
    }
  },
  {
    title: "Beachfront Luxury Villa in Goa",
    description: "Step directly onto the sandy beaches of North Goa. Features a private pool, open sky showers, and a personal chef for the ultimate coastal vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 6500,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.7553, 15.5520]
    }
  },
  {
    title: "Charming Hilltop Cabin",
    description: "Escape the heat in this cozy wooden cabin nestled in the snow-capped hills of Manali. Perfect for hiking and hot chocolate sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2396]
    }
  },
  {
    title: "Royal Heritage Palace Stay",
    description: "Live like royalty in a historic palace in the Pink City of Jaipur. Marvel at traditional artwork, inner courtyards, and grand architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Jaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.8189, 26.9124]
    }
  },
  {
    title: "Modern Apartment with Skyline View",
    description: "Stay in the heart of India's commercial capital. High-rise luxury apartment with panoramic views of the Mumbai skyline and Arabian sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Mumbai",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.0760]
    }
  },
  {
    title: "Alleppey Houseboat Experience",
    description: "Float down the peaceful backwaters of Kerala in a traditional luxury houseboat. Includes freshly caught sea bass and local delicacies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Alleppey, Kerala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981]
    }
  },
  {
    title: "Luxury Penthouse in Manhattan",
    description: "Indulge in high-end living in New York City with Central Park views, marble flooring, and access to a private rooftop terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 9500,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    }
  },
  {
    title: "Chic Studio near Eiffel Tower",
    description: "A cozy, sunlit studio located in the 7th arrondissement of Paris, just a 5-minute walk from the Eiffel Tower and local bistros.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
  {
    title: "Traditional Ryokan in Kyoto",
    description: "Unwind on tatami mats and enjoy private hot spring onsens in a historic district of Kyoto. Perfect for a mindful, cultural experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 4800,
    location: "Kyoto",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116]
    }
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description: "Wake up to turquoise lagoon waters directly below your bedroom. Features glass floor view portals and private lagoon swim docks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 12000,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5004]
    }
  }
];

module.exports = { data: sampleListings };