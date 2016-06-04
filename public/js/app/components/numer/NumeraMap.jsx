'use strict';

var React,
 Numera, NumeraStore;

React = require('react');

NumeraStore = require('../../stores/NumerologyStore');
Numera  = React.createClass({
  getInitialState: function() {
    var self;
    self = this;
    console.log(NumeraStore.numeras);
    return {map: NumeraStore.numeras};
  },
  componentDidMount: function() {
    var self;
  },
  render: function() {
    return <div>
      <pre>
        {JSON.stringify(this.state.map, null, 2)}
      </pre>
    </div>
  }
});

module.exports = Numera;