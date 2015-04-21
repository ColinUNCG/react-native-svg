var d3 = require('d3');
var jsdom = require('jsdom-jscore');
var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
  } = React;
var Svg = require('../Svg');
var TimerMixin = require('react-timer-mixin');
var ChartD3 = require('./Charts/D3Ball');

var parseDate = d3.time.format("%d-%b-%y").parse;

var D3Chart = React.createClass({
  getInitialState() {
    return ({
      el: false,
      chartObject: false,
      props: {}
    })
  },

  componentDidMount() {
    this.setState({
      props: {circleSize: this.props.circleSize}
    });
    this.loadDOM();
  },

  loadDOM(n) {
    var self = this;
    var myChart = new ChartD3; //clone a new chart
    this.setState({chartObject: myChart})

    jsdom.env('<body></body>', function(errors, window) {
      var el = window.document.querySelector('body');
      self.setState({el: el});
      myChart.mainFunction(window, el, self, self.state.props);
    })
  },

  onUpdateGraph() {
    this.state.chartObject.updateFunction(window, this.state.el, this, this.state.props);
  },

  render() {
    if (this.state && this.state.svg) {
      return (
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onUpdateGraph}
            underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Update Graph</Text>
          </TouchableHighlight>
          <Svg
            width={960}
            height={960}
            style={{width:this.props.width, height: this.props.width}}
            data={this.state.svg}
            forceUpdate={(Math.floor(Date.now())).toString()}/>
        </View>
      )
    } else {
      return <View />
    }
  },

});

var styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = D3Chart;