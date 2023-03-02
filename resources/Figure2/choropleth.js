var format = function(d, isLog) {
    if (isLog) {return d3.format(',.02f')(d);}
    d = d / 1000;
    return d3.format(',.02f')(d) + 'K';
}

// month translation
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthStartX = 10, monthStartY = 250, monthWidth = 50, monthHeight = 20;
var threshold = 6;
var textWidth = 18, textHeight = 26, rectWidth = 35, rectHeight = 20;
var currentRectW = 0, currentRectH = 0;
var isLog = false, scaleX = 10, scaleY = 385, scaleX2 = 20, scaleY2 = 400;
var width = window.innerWidth, height = window.innerHeight;
var map = d3.choropleth()
    .geofile('https://raw.githubusercontent.com/HuangruiChu/Bird-Collision-Visualization/main/resources/Figure2/d3-geomap/dist/topojson/world/countries.json')
    .colors(d3.schemeYlGnBu[9])
    .column('Mar')
    .format(function(d) {return format(d, isLog);})
    .legend(true)
    .unitId('iso3').width(width - 160).height(height - 160)/*.translate([200, 200])*/;

function getNodeX(d, i) {return monthStartX + Math.floor(i / threshold) * monthWidth;}
function getNodeY(d, i) {return monthStartY + (i % threshold) * monthHeight;}
function add_rect() {
    var svg = d3.select('svg');
    //svg.append('text').text('try me').attr('x', monthStartX).attr('y', monthStartY);
    //svg.append('text').text('try me').attr('x', monthStartX + monthWidth).attr('y', monthStartY + monthHeight);
    var rect = svg.append('rect')
       .attr('x', currentRectW)
       .attr('y', currentRectH)
       .attr('width', rectWidth)
       .attr('height', rectHeight)
       .attr('fill', 'none').attr('stroke', 'black');
    svg.append('text').text(isLog ? 'Log scale' : 'Normal scale')
       .attr('x', scaleX).attr('y', scaleY);
    return rect;
}
function redraw(data, data_log) {
    var selection = d3.select('#map').datum(isLog ? data_log : data);
    d3.select('svg').remove();
    map.draw(selection);
    var rect = add_rect();
    var svg = d3.select('svg');
    svg.append('text').selectAll('tspan').data(months).enter().append('tspan')
       .attr('x', getNodeX).attr('y', getNodeY)
       .text(function(d) {return d;})
       .on('click', function(d, i) {on_click(d, i, data, data_log);});
    svg.append('text').text('Change').attr('style', 'fill: blue;')
       .attr('x', scaleX2).attr('y', scaleY2).attr('id', 'changeText')
       .on('click', function() {isLog = !isLog; redraw(data, data_log);});
    return rect;
}
function on_click(d, i, data, data_log) {
    /*var map = d3.choropleth()
       .geofile('/resources/Figure 2/d3-geomap/dist/topojson/world/countries.json')
       .colors(d3.schemeYlGnBu[9])
       .column(d)
       .format(format)
       .legend(true)
       .unitId('iso3');*/
    map.column(d);
    var rect = redraw(data, data_log);

    // add transition
    var trans = rect.transition();
    currentRectW = getNodeX(d, i) - textWidth / 2;
    currentRectH = getNodeY(d, i) - textHeight / 2;
    var transX = currentRectW - rect.attr('x');
    var transY = currentRectH - rect.attr('y');
    trans.attr('transform', 'translate(' + transX + ', ' + transY + ')').duration(500);
}

d3.csv('https://raw.githubusercontent.com/HuangruiChu/Bird-Collision-Visualization/main/resources/Figure2/iNaturalist_country_contrubution.csv').then(data => {
    d3.csv('https://raw.githubusercontent.com/HuangruiChu/Bird-Collision-Visualization/main/resources/Figure2/iNaturalist_country_contrubution_log.csv').then(data_log => {
        currentRectW = monthStartX - textWidth / 2;
        currentRectH = monthStartY - textHeight / 2;
        isLog = false;
        var selection = d3.select('#map').datum(data);
        map.draw(selection);
        add_rect();
        var svg = d3.select('svg');
        svg.append('text').selectAll('tspan').data(months).enter().append('tspan')
           .attr('x', getNodeX).attr('y', getNodeY)
           .text(function(d) {return d;})
           .on('click', function(d, i) {on_click(d, i, data, data_log);});
        svg.append('text').text('Change').attr('style', 'fill: blue;')
           .attr('x', scaleX2).attr('y', scaleY2).attr('id', 'changeText')
           .on('click', function() {isLog = !isLog; redraw(data, data_log);});
    });
});

