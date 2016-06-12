const
React = require('react'),
NumeraMap = require('./components/numer/NumeraMap.jsx'),
NumeraInput = require('./components/numer/NumeraInput.jsx'),
NumeraResult = require('./components/numer/NumeraResult.jsx');

var App;

App = React.createClass({
	render: function() {
		return <div>
		<section>
			<NumeraInput></NumeraInput>
		</section>
		<section>
			<NumeraResult></NumeraResult>
		</section>
		</div>
	}
});

module.exports = App;
