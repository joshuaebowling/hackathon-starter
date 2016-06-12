/**
 * @class NumeraWordValue
 * @version 1.0.0
 * @description React Component, tcontains the numerogical value (numera) of a given word from the word set
 */

const _ = require('underscore'),
  React = require('react');

var NumeraChannel, NumeraWordValues;

NumeraChannel = require('../../channels').numerology;
NumeraWordValues = React.createClass({
  getInitialState: function() {
    'use strict';
    return { numeras: [] }; 
  },
  componentDidMount: function() {
    'use strict';
    var consts, route, self;

    self = this;
    // subscribe when the calculation event is finished
    consts = NumeraChannel.constants;
    route = `${ consts.Base }.${ consts.ActionTypes.CALCULATE }.${ consts.States.RESPONSE }`;
    NumeraChannel.channel.subscribe(route, (data) => {
      self.setState({ numeras: _.pluck(data, 'numera') });
    });
  },
  render: function() {
    var result = 
      <tr>
       { this.state.numeras.map((numera) => {
          return <td> { numera } </td>
        }) }
      </tr>;
    return result;
  }
});

module.exports = NumeraWordValues;