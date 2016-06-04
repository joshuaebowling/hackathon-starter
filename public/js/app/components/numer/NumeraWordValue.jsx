/**
 * @class NumeraInput
 * @version 1.0.0
 * @description React Component, text input for triggering numerological calculation
 */

const
 _ = require('underscore');

var React,
  NumeraChannel, NumeraWordValues;

React = require('react');

NumeraChannel = require('../../channels').numerology;
NumeraWordValues = React.createClass({
  getInitialState: function() {
    var self;
    self = this;
    // decoded to state object
    return {numeras: []}; 
  },
  componentDidMount: function() {
    var route, self, consts;

    self = this;
    // subscribe when the calculation event is finished
    consts = NumeraChannel.constants;
    route = `${consts.Base}.${consts.ActionTypes.CALCULATE}.${consts.States.RESPONSE}`;
    NumeraChannel.channel.subscribe(route, (data) => {
      console.log(data);
      self.setState({numeras: _.pluck(data, 'numera')});
    });
  },
  render: function() {
    var result = 
      <tr>
       { this.state.numeras.map((numera) => {
          return <td> {numera} </td>
        }) }
      </tr>;
    return result;
  }
});

module.exports = NumeraWordValues;