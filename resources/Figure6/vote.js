const WIDTH = 700;// 画布宽度
const HEIGHT = 600;// 画布高度 通过改这个，来实现和底部的距离
const PADDING = 50;// 画布四周空间

// 模拟数据
var pokemon_xscale=["Method1","Method2","Method3"]
var pokemon_color=["#48585c","#dec1d6","#82cce2"]
let dataList = [0,0,0];

let y_color="black";
let x_color="black";
let text_color="black";
// 排序标记
let sort_flag = false;

// 生成svg画布,是这个柱状图的画布诶
var svg=d3.select('#wrap')
  .append('svg')
  .classed('container', true)
  .attr('width', WIDTH + PADDING * 2)
  .attr('height', HEIGHT + PADDING *2);
// 容器画布
let container = d3.select('.container');

// y线性比例尺
let yScale = d3.scaleLinear()
  .domain([0, d3.max(dataList)])
  .range([HEIGHT, 0]);// 坐标轴从下往上，所以反过来
let yAxis = d3.axisLeft(yScale);



// x序数比例尺
let xScale = d3.scaleBand()
    .domain(d3.range(dataList.length))
    .range([0,WIDTH])
    .paddingInner(0.7);// 定义柱形之间的间隙在 0.1-0.9之间调试指定每个矩形的间隔

let xAxis = d3.axisBottom(xScale);



// y轴坐标轴展示
let yaxis=container.append('g')
  .attr('id', 'yAxis')
  .attr('transform', 'translate(' + PADDING + ',' + PADDING + ')')
  .call(yAxis);
 yaxis.selectAll('text').attr('stroke', y_color).style("font-size","18px");

// x轴坐标轴展示
let xaxis = container.append('g')
  .attr('id', 'xAxis')
  .attr('transform', 'translate(' + PADDING + ',' + (HEIGHT + PADDING) + ')')
  .call(xAxis);
xaxis.selectAll('text').attr('stroke', x_color).style("font-size","18px");

// 柱状图容器
let rectGroup = container.append('g').attr('id', 'rectGroup');
// 文本容器
let textGroup = container.append('g').attr('id', 'textGroup');

// 加载rect
function renderRect() {
  rectGroup.selectAll('rect')
    .data(dataList)
    .enter()
    .append('rect')
    .classed('rect', true)
    .on('click', (d)=>{// 添加点击提示的事件
      let x = d3.event.pageX;
      let y = d3.event.pageY;
      d3.select('#prompt')
        .style('display', 'block')
        .style('left', x + 'px')
        .style('top', y+ 'px')
        .text(d)
    })
  container.selectAll('.rect')
    .attr('width', xScale.bandwidth())
    .attr('height', 0)
    .attr('x', (d, i)=>{
      return xScale(i) + PADDING
    })
    .attr('y', (d, i)=>{
      return HEIGHT + PADDING
    })
    .attr("fill", function(d,i){
      // 储黄瑞想在这里根据宝可梦调颜色。
          return pokemon_color[i];// 根据值的大小获取颜色
          })
    .transition()// 设置过渡
    .duration(300)
    .delay((d, i)=>{
      return i * 20
    })
    .attr('height', (d, i)=>{
      return HEIGHT - yScale(d)
    })
    .attr('y', (d, i)=>{
      return yScale(d) + PADDING
    })

}

// 加载文本
var pokemon_name=["Method1","Method2","Method3"]
function renderText() {
  textGroup.selectAll('text')
    .data(dataList)
    .enter()
    .append('text')
    .attr("fill",text_color)
    .classed('text', true)

  textGroup.selectAll('text')
    .attr('text-anchor', 'middle')// 将文本中点设置为中心
    .text((d, i)=>{
      return pokemon_name[i] //这边写文字哦
    })
    .attr('x', (d, i)=>{
      return xScale(i) + xScale.bandwidth() / 2 + PADDING
    })
    .attr('y', HEIGHT + PADDING - 10)
    .transition()
    .duration(300)
    .delay((d, i)=>{
      return i * 20
    })
    .attr('y', (d, i)=>{
      return yScale(d) + PADDING - 10
    })
    // .style('fill', (d, i)=>{
    //   if (d > 25) {// 大于25的文本显示为红色
    //     return 'red'
    //   }
    // })
}

// 更新视图（修改数据时调用）
function refresh() {
  // 更新比例尺
  yScale.domain([0, d3.max(dataList)])
  d3.select('#yAxis').call(yAxis);
  xScale.domain(d3.range(dataList.length))
  d3.select('#xAxis').call(xAxis);
  yaxis.selectAll('text').attr('stroke', y_color).style("font-size","18px");
  // 重新加载内容
  renderRect();
  renderText();
}

// 加载事件
function initEvent() {
  // 离开时关闭提示
  d3.select('#wrap').on('mouseleave', ()=>{
    d3.select('#prompt').style('display', 'none')
  })

  // 点击排序，这个储黄瑞保留了
  d3.select('#btn-sort').on('click', ()=>{
    rectGroup.selectAll('rect')
      .sort((a, b)=>{// d3自带方法，升序降序
        return sort_flag ? d3.descending(a, b) : d3.ascending(a, b)
      })
      .transition()
      .duration(500)
      .attr('x', (d, i)=>{
        return xScale(i) + PADDING
      })

      textGroup.selectAll('text')
      .sort((a, b)=>{// d3自带方法，升序降序
        return sort_flag ? d3.descending(a, b) : d3.ascending(a, b)
      })
      .transition()
      .duration(500)
      .attr('x', (d, i)=>{
        return xScale(i) + xScale.bandwidth() / 2 + PADDING
      })

      //怎么设置不显示坐标轴？




//求助


      sort_flag = !sort_flag;// 切换顺序
  })

  // 点击赞
  d3.select('#btn-like1').on('click', ()=>{
          dataList[0]+=1// 第一个数据加一
          refresh();// 更新视图
  })
  d3.select('#btn-like2').on('click', ()=>{
          dataList[1]+=1// 第一个数据加一
          refresh();// 更新视图
  })
  d3.select('#btn-like3').on('click', ()=>{
          dataList[2]+=1// 第一个数据加一
          refresh();// 更新视图
  })

}

// 视图初始化
renderRect();
renderText();
initEvent();
