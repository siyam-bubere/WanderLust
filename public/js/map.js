// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//     container: 'map', 
//     style: 'mapbox://styles/mapbox/streets-v12', 
//     center: coordinates, // Use the variable passed from EJS
//     zoom: 9 
// });

// // Create the marker
// const marker = new mapboxgl.Marker({ color: 'red' })
//     .setLngLat(coordinates) // Use the variable passed from EJS
//     .setPopup(
//         new mapboxgl.Popup({ offset: 25 })
//         .setHTML(`<h4>Location</h4><p>Exact location provided after booking</p>`)
//     )
//     .addTo(map);

mapboxgl.accessToken = mapToken;

// Check if coordinates exist and are in the correct format [lng, lat]
if (listing.geometry.coordinates && listing.geometry.coordinates.length === 2) {
    const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v12', 
        center: listing.geometry.coordinates, 
        zoom: 9 
    });

    const marker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h4>${listing.location}</h4><p><i>Exact location will be provided after successfull booking</i></p>`)
        )
        .addTo(map);
} else {
    console.error("Invalid coordinates provided for Mapbox.");
    document.getElementById('map').style.display = 'none'; // Hide the map container if no data
}

window.onresize = () => {
    map.resize(); // For Mapbox
    // map.invalidateSize(); // Use this instead if you are using Leaflet
};