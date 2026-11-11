// EXECUTION LAYER: Kicks off app initialization when the web page loads

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the Leaflet map container and program markers
  if (typeof initPitchMap === 'function') {
    initPitchMap();
  } else {
    console.error('initPitchMap function is not available. Check script loading order.');
  }
});
