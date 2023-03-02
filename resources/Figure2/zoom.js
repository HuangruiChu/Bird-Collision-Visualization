var map = d3.geomap()
    .geofile('/d3-geomap/dist/topojson/world/countries.json')
    .draw(d3.select('#map'));
