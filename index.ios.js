'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  } = React;

var Landing = require('./Apps/Landing');

var SvgExample = React.createClass({
  render() {
    return (
      <Landing/>
    );
  }
});

AppRegistry.registerComponent('SvgExample', () => SvgExample);
