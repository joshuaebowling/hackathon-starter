/**
 * @class NumeraMap
 * @version 1.0.0
 * @description React Component, a JSON representation of numera data model based on input
 */


const React = require('react');

var Numera, NumeraStore;

NumeraStore = require('../../stores/').numerology;
Numera  = React.createClass({
  getInitialState: function() {
    'use strict';
    return { map: NumeraStore.numeras };
  },
  componentDidMount: function() {
    'use strict';
  },
  render: function() {
    return <div>
      <pre>
        { JSON.stringify(this.state.map, null, 2) }
      </pre>
    </div>
  }
});

module.exports = Numera;