'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  ScrollView
  } = React;
var Viewport = require('react-native-viewport');
var TimerMixin = require('react-timer-mixin');

var D3Chart = require('./D3Chart');

var Landing = React.createClass({
  mixins: [TimerMixin],

  getInitialState() {
    return ({
      dimensions: {width: 0, height: 0}
    })
  },

  setDimensions() {
    var self = this;
    Viewport.getDimensions(dim => {
      this.setState({dimensions: dim})
    });
    //we have a race condition... let's use a hack for now...
    this.setTimeout(
      () => Viewport.getDimensions(dim => {
        self.setState({dimensions: dim})
      }),
      100
    );
  },

  componentDidMount() {
    this.setDimensions();
    Viewport.addEventListener('dimensionsDidChange', this.setDimensions)
  },

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.flowRight}>
            <D3Chart
              style={styles.chartElement}
              width={this.state.dimensions.width / 2 - 10}
              height={this.state.dimensions.height / 2}
              circleSize = {0.75}
              />
            <D3Chart
              style={styles.chartElement}
              width={this.state.dimensions.width / 2 - 10}
              height={this.state.dimensions.height / 2}
              circleSize = {1}
              />
          </View>
          <View style={styles.flowRight}>
            <D3Chart
              style={styles.chartElement}
              width={this.state.dimensions.width / 2 - 10}
              height={this.state.dimensions.height / 2}
              circleSize = {1.5}
              />
            <D3Chart
              style={styles.chartElement}
              width={this.state.dimensions.width / 2 - 10}
              height={this.state.dimensions.height / 2}
              circleSize = {2}
              />
          </View>

        </View>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'stretch',
    alignSelf: 'stretch',
  },
  chartElement: {
    flex: 1
  }
});

module.exports = Landing;
