/**
 * @class NumeraResult
 * @version 1.0.0
 * @description React Component, outer-most component for numerolgy transformation (numera)
 */

const React = require('react');

var NumeraChannel, NumeraResult, NumeraWordLetters, NumeraWordValues, NumeraWords;

NumeraChannel = require('../../channels').numerology;
NumeraWords = require('./NumeraWords.jsx');
NumeraWordValues = require('./NumeraWordValue.jsx');
NumeraWordLetters = require('./NumeraWordLetters.jsx');

NumeraResult = React.createClass({
  getInitialState: function() {
    'use strict';
    return { decoded: null }; 

  },
  componentDidMount: function() {
   'use strict';
  },
  render: function() {
    return (
    <div>
      <table className="table table-responsive">
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