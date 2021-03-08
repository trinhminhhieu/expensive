/* eslint-disable */
export const displayMap = locations => {

  mapboxgl.accessToken = 'pk.eyJ1IjoidHJpbmhoaWV1NzQiLCJhIjoiY2syZGQ0N2RhM2RnbDNscGhzb2dpY2lrcyJ9.xbNI7Q9WIUByQMKaU790Bg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/trinhhieu74/ck9ru0yer6z441is8vz79vsow',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
    
  });


  map.addControl(new mapboxgl.NavigationControl());


  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    //.maker pin icon location style.css
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

//add zooom

 
    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
    
  });
 
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });

  
};
