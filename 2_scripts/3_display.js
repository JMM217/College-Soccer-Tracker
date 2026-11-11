// PRESENTATION LAYER: Manages Leaflet map rendering and pin displays

let mapInstance = null;

// Initialize the Leaflet map container
function initPitchMap() {
  // Center on the contiguous U.S. (Latitude 39.8, Longitude -98.5) with zoom level 4
  mapInstance = L.map('map').setView([39.8283, -98.5795], 4);

  // Add CartoDB Dark Matter map tiles for dark pitch theme
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(mapInstance);

  // Render initial programs on the map
  const programs = getSoccerPrograms();
  renderMapMarkers(programs);
}

// Render marker pins on the Leaflet map
function renderMapMarkers(programs) {
  if (!mapInstance) return;

  programs.forEach(program => {
    // Add marker pin for each school location
    const marker = L.marker([program.lat, program.lng]).addTo(mapInstance);

    // Build standard popup content card
    const popupContent = `
      <div style="color: #0f172a; font-family: sans-serif; padding: 4px;">
        <strong style="font-size: 1.1em; color: #0284c7;">${program.name}</strong><br/>
        <span>${program.city}, ${program.state}</span><br/>
        <hr style="margin: 6px 0; border: 0; border-top: 1px solid #cbd5e1;"/>
        <b>Division:</b> ${program.division} (${program.gender}'s)<br/>
        <b>Conference:</b> ${program.conference}<br/>
        <b>Stadium:</b> ${program.stadium} (${program.surface})<br/>
        <b>Capacity:</b> ${program.capacity.toLocaleString()}<br/>
        <b>Broadcast:</b> ${program.broadcast}
      </div>
    `;

    marker.bindPopup(popupContent);
  });
}
