/**
 * @class NumeraWordLetters
 * @version 1.0.0
 * @description React Component, Container letters for a given word component
 */

const _ = require('underscore'),
  React = require('react');

var NumeraChannel, NumeraWordLetters;

NumeraChannel = require('../../channels').numerology;
NumeraWordLetters = React.createClass({
  getInitialState: function() {
    'use strict';
    return { letters: [] }; 
  },
  componentDidMount: function() {
    'use strict';
    var consts, route, self;

    self = this;
    // subscribe when the calculation event is finished
    consts = NumeraChannel.constants;
    route = `${ consts.Base }.${ consts.ActionTypes.LETTERS }.${ consts.States.RESPONSE }`;
    NumeraChannel.channel.subscribe(route, (data) => {
      self.setState({ letters: data });
    });
  },
  render: function() {
    var result =
    <table className="table table-responsive table-striped">
      <tbody>
        <tr style={ { minWidth:'50px' } }>
         { _.map(this.state.letters,(letter) => {
            return <td> { letter.letter } </td>
          }) }
        </tr>
        <tr>
         { _.map(this.state.letters,(letter) => {
            return <td> { letter.numera } </td>
          }) }
        </tr>
        <tr>
         { _.map(this.state.letters,(letter) => {
            return <td> { letter.position } </td>
          }) }
        </tr>
      </tbody>
    </table>;
    return result;
  }
});

module.exports = NumeraWordLetters;