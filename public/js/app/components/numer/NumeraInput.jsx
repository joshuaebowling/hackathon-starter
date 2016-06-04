/**
 * @class NumeraInput
 * @version 1.0.0
 * @description React Component, text input for triggering numerological calculation
 */

var React,
 NumeraInput, NumeraChannel;

React = require('react');

NumeraChannel = require('../../channels').numerology;
NumeraInput  = React.createClass({
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
/**
* @function decode
* @memberOf NumerologyStore#
* @name decode
* @description triggers calculate request
* @returns {null}
*/
  decode: function(event) {
    NumeraChannel.calculate(event.target.value);
  },
  render: function() {
    return <div>
      <textarea value={this.props.coded} onBlur={this.decode}></textarea>
    </div>
  }
});

module.exports = NumeraInput;