var d3 = require('d3');

module.exports = function() {
  return ({
    getProps: function(props) {
      //we need to use Object.assign() later. TODO.
      return ({
        circleSize: props.circleSize || 1
      })
    },
    mainFunction: function(window, el, self, props) {

      var margin = {top: 20, right: 20, bottom: 0, left: 20},
        width = 960 - margin.left - margin.right,
        height = 960 - margin.top - margin.bottom;

      this.x = d3.time.scale()
        .range([0, width]);

      this.y = d3.scale.linear()
        .range([height, 0]);

      this.count = 0;

      this.svg = d3.select(el).append("svg")
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


      this.svg.append('text')
        .attr('class', 'texty') //can't select ID?
        .text('Circles: ' + this.count)
        .attr('y', margin.top)
        .style('font-size', 50)
      self.setState({svg: el.innerHTML});
    },

    updateFunction: function(window, el, self, props) {
      var myProps = this.getProps(props);
      var me = this;
      var updateMS = 20;
      var duration = 500;
      var thres = 0;
      var stop = false;

      ++this.count;

      this.svg.append('circle')
        .attr('cx', this.x(Math.random()))
        .attr('cy', this.y(Math.random()))
        .attr('r', myProps.circleSize * 20)
        .style('stroke', 'rgb(' +
        (256 * Math.random()) + ',' +
        (256 * Math.random()) + ',' +
        (256 * Math.random()))
        .style('stroke-width', '7px')
        .style('fill', 'none');

      this.svg.selectAll('circle')
        .transition()
        .duration(duration)
        .attr('cx', function() {
          return me.x(Math.random());
        })
        .attr('cy', function() {
          return me.y(Math.random());
        });

      //select some dummy element to run fake transition on
      //to trigger ticker
      this.svg.select('text')
        .transition()
        .duration(duration)
        .attrTween('t', ticker);


      function ticker() {
        return function(t) {
          if (!stop && (t === 1 || t * duration >= thres)) {
            if (t === 1) {
              stop = true;
            }
            thres += updateMS;
            self.setState({svg: el.innerHTML});
          }
        }
      }


      this.svg.select('.texty')
        .text('Circles: ' + this.count)

      self.setState({svg: el.innerHTML});
    }

  })
};
