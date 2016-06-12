/**
 * @class NumeraWords
 * @version 1.0.0
 * @description React Component, wrapping component for each word in raw phrase.
 */

const _ = require('underscore'),
  React = require('react');

var NumeraChannel, NumeraWords;

NumeraChannel = require('../../channels').numerology;
NumeraWords = React.createClass({
  getInitialState: function() {
    'use strict';
    return { words: [], set: [] }; 
  },
  componentDidMount: function() {
    'use strict';
    var consts, route, self;

    self = this;
    // subscribe when the calculation event is finished
    consts = NumeraChannel.constants;
    route = `${ consts.Base }.${ consts.ActionTypes.CALCULATE }.${ consts.States.RESPONSE }`;
    NumeraChannel.channel.subscribe(route, (data) => {
      self.setState({ words: _.pluck(data, 'word'), set: data });
    });
  },
  showLetters: function(word) {
    'use strict';
    NumeraChannel.showLetters(_.where(this.state.set, { word: word })[0].letters);
  },

  render: function() {
    var result = 
      <tr>
       { this.state.words.map((word) => {
          return <td>
            <span onMouseOver={ () => this.showLetters(word) } onTouchStart={ () => this.showLetters(word) }>
              { word }
            </span>
          </td>
        }) }
      </tr>;
    return result;
  }
});

module.exports = NumeraWords;