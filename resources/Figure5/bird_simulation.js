var a = ['The Bird is flying','The Bird died'];
var f = 0;
function final_outcome() {
    if (f == 0) {
        document.getElementById("outcome").innerHTML = a[0];
    } if (f >= 1) {
        document.getElementById("outcome").innerHTML = a[1];
    }
}
function forest(){
    f += 0;
}
function window1(){
    f += 1;
}
function window2(){
    f += 0;
}
function refresh(){
    f = 0;
    document.getElementById("outcome").innerHTML = a[0];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var svg=d3.select('#background')
        .append('svg')
        .attr("width",  "1500px")
        .attr("height", "1000px")

  // 点击触发事件
  d3.select('#Forest').on('click', ()=>{
     svg.append("svg:image")
      .attr('x', 0)
      .attr('y', 0)
      //控制图片大小
      .attr('width', 900)
      .attr('height', 500)
      .attr("xlink:href", "resources/Figure 5/forest.jpg")
  })
  d3.select('#window1').on('click', ()=>{
    svg.append("svg:image")
     .attr('x', 0)
     .attr('y', 0)
     .attr('width', 900)
     .attr('height', 500)
     .attr("xlink:href", "resources/Figure 5/window1.jpg")
  })
  d3.select('#window2').on('click', ()=>{
    svg.append("svg:image")
     .attr('x', 0)
     .attr('y', 0)
     .attr('width', 900)
     .attr('height', 500)
     .attr("xlink:href", "resources/Figure 5/window2.png")
  })
  d3.select('#Refresh').on('click', ()=>{
    svg.selectAll("*").remove();
  })
  d3.select('#FinalOutcome').on('click', ()=>{
    svg.append("svg:image")
     .attr('x', 0)
     .attr('y', 0)
     .attr('width', 900)
     .attr('height', 500)
     .attr("xlink:href", 'resources/Figure 5/birds/' + (f >= 1 ? 'deadbird' : 'livebirds') + getRandomIntInclusive(1, 3) + ".jpg")
  })
