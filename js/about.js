function initMap() {
    const hotel_coords = { lat:53.26898217889667, lng:-9.016113489636107 };
    const map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 12,
        center: hotel_coords,
    });
    const marker = new google.maps.Marker({
        position: hotel_coords,
        map: map,
    });
}
initMap();

