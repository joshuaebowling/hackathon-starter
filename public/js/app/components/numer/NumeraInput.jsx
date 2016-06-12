/**
 * @class NumeraInput
 * @version 1.0.0
 * @description React Component, text input for triggering numerological calculation
 */

const React = require('react');

var NumeraInput, NumeraChannel;

NumeraChannel = require('../../channels').numerology;
NumeraInput  = React.createClass({
  getInitialState: function() {
    'use strict';
    // decoded to state object
    return { decoded: null }; 
  },
  componentDidMount: function() {
    'use strict';

  },
/**
* @function decode
* @memberOf NumerologyStore#
* @name decode
* @description triggers calculate request
* @returns {null}
*/
  decode: function(event) {
    'use strict';
    NumeraChannel.calculate(event.target.value);
  },
  render: function() {
    return <div>
      <textarea value={ this.props.coded } onBlur={ this.decode }></textarea>
    </div>
  }
});

module.exports = NumeraInput;