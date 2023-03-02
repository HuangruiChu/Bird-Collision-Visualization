
var text_size='19px';
var text_color='#000000';
var circle_color="red";
var circle_radius="50px";

var svg=d3.select('#wrap')
  .append('svg')
  .attr("width", "1100px")
  .attr("height", "640px")


let tooltip = d3.select('body')
    	.append('div')
    	.style('position', 'absolute')
      .style('z-index', '10')
    	.style('color', text_color)
      .style('visibility', 'hidden')
      .style('font-size',text_size)
    	.style('font-weight', 'bold')
    	.text('')



  var cc=svg.append("circle")
     .attr("cx","505px")
     .attr("cy","401px")
     .attr("r","20px")
     .attr("fill",circle_color)
     .on('mouseover', function (d, i) {
        return tooltip.style('visibility', 'visible').text("Conference Center")
      })
      .on('mousemove', function (d, i) {
        return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
      })
      .on('mouseout', function (d, i) {
        return tooltip.style('visibility', 'hidden')
      })
     .on("click", function() {
          window.open("resources/Figure 4/cc.html");
         console.log("mouseClick")
     });

     var ab=svg.append("circle")
        .attr("cx","725px")
        .attr("cy","400px")
        .attr("r","10px")
        .attr("fill","red")
        .on('mouseover', function (d, i) {
           return tooltip.style('visibility', 'visible').text("Academic Building")
         })
         .on('mousemove', function (d, i) {
           return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
         })
         .on('mouseout', function (d, i) {
           return tooltip.style('visibility', 'hidden')
         })
        .on("click", function() {
             window.open("resources/Figure 4/ab.html");
            console.log("mouseClick")
        });

        var edh=svg.append("circle")
           .attr("cx","638px")
           .attr("cy","328px")
           .attr("r","5px")
           .attr("fill", "none")
           .attr("stroke", "red")
           .attr("stroke-width", "4px")
           .on('mouseover', function (d, i) {
              return tooltip.style('visibility', 'visible').text("Executive Dining Hall")
            })
            .on('mousemove', function (d, i) {
              return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
            })
            .on('mouseout', function (d, i) {
              return tooltip.style('visibility', 'hidden')
            })
           .on("click", function() {
                window.open("resources/Figure 4/empty.html");
               console.log("mouseClick")
           });

        var srh1=svg.append("circle")
           .attr("cx","565px")
           .attr("cy","190px")
           .attr("r","5px")
           .attr("fill", "none")
           .attr("stroke", "red")
           .attr("stroke-width", "4px")
           .on('mouseover', function (d, i) {
              return tooltip.style('visibility', 'visible').text("Student Residence Hall")
            })
            .on('mousemove', function (d, i) {
              return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
            })
            .on('mouseout', function (d, i) {
              return tooltip.style('visibility', 'hidden')
            })
           .on("click", function() {
                window.open("resources/Figure 4/empty.html");
               console.log("mouseClick")
           });

           var srh2=svg.append("circle")
              .attr("cx","621px")
              .attr("cy","209px")
              .attr("r","15px")
              .attr("fill",circle_color)
              .on('mouseover', function (d, i) {
                 return tooltip.style('visibility', 'visible').text("Student Residence Hall")
               })
               .on('mousemove', function (d, i) {
                 return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
               })
               .on('mouseout', function (d, i) {
                 return tooltip.style('visibility', 'hidden')
               })
              .on("click", function() {
                   window.open("resources/Figure 4/rh.html");
                  console.log("mouseClick")
              });


           var ib=svg.append("circle")
              .attr("cx","700px")
              .attr("cy","600px")
              .attr("r","10px")
              .attr("fill",circle_color)
              .on('mouseover', function (d, i) {
                 return tooltip.style('visibility', 'visible').text("Innovation Building")
               })
               .on('mousemove', function (d, i) {
                 return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
               })
               .on('mouseout', function (d, i) {
                 return tooltip.style('visibility', 'hidden')
               })
              .on("click", function() {
                   window.open("resources/Figure 4/ib.html");
                  console.log("mouseClick")
              });



              var wt=svg.append("circle")
                 .attr("cx","580px")
                 .attr("cy","355px")
                 .attr("r","11px")
                 .attr("fill",circle_color)
                 .on('mouseover', function (d, i) {
                    return tooltip.style('visibility', 'visible').text("Water Pavilion")
                  })
                  .on('mousemove', function (d, i) {
                    return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
                  })
                  .on('mouseout', function (d, i) {
                    return tooltip.style('visibility', 'hidden')
                  })
                 .on("click", function() {
                      window.open("resources/Figure 4/wp.html");
                     console.log("mouseClick")
                 });

                 var fr=svg.append("circle")
                    .attr("cx","375px")
                    .attr("cy","205px")
                    .attr("r","5px")
                    .attr("fill", "none")
                    .attr("stroke", "red")
                    .attr("stroke-width", "4px")
                    .on('mouseover', function (d, i) {
                       return tooltip.style('visibility', 'visible').text("Faculty Residence")
                     })
                     .on('mousemove', function (d, i) {
                       return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
                     })
                     .on('mouseout', function (d, i) {
                       return tooltip.style('visibility', 'hidden')
                     })
                    .on("click", function() {
                         window.open("resources/Figure 4/empty.html");
                        console.log("mouseClick")
                    });


                    var sb=svg.append("circle")
                       .attr("cx","690px")
                       .attr("cy","125px")
                       .attr("r","5px")
                       .attr("fill", "none")
                       .attr("stroke", "red")
                       .attr("stroke-width", "4px")
                       .on('mouseover', function (d, i) {
                          return tooltip.style('visibility', 'visible').text("Service Building")
                        })
                        .on('mousemove', function (d, i) {
                          return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
                        })
                        .on('mouseout', function (d, i) {
                          return tooltip.style('visibility', 'hidden')
                        })
                       .on("click", function() {
                            window.open("resources/Figure 4/empty.html");
                           console.log("mouseClick")
                       });
