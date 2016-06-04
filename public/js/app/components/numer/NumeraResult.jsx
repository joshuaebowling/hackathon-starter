/**
 * @class NumeraInput
 * @version 1.0.0
 * @description React Component, text input for triggering numerological calculation
 */

var React,
 NumeraChannel, NumeraResult, NumeraWordLetters, NumeraWords, NumeraWordValues;

React = require('react');

NumeraChannel = require('../../channels').numerology;
NumeraWords = require('./NumeraWords.jsx');
NumeraWordValues = require('./NumeraWordValue.jsx');
NumeraWordLetters = require('./NumeraWordLetters.jsx');

NumeraResult = React.createClass({
  getInitialState: function() {
    var self;
    self = this;
    // decoded to state object
    return {decoded: null}; 

  },
  componentDidMount: function() {
    var route, self, consts;

    self = this;
  },
  render: function() {
    return (
    <div>
      <table class="table-responsive">
        <tbody>
          <NumeraWords />
          <NumeraWordValues />
        </tbody>
      </table>
      <NumeraWordLetters />
    </div>
    )
  }
});

module.exports = NumeraResult;