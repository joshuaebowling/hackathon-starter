module.exports = {
    entry: './public/js/app/index.jsx',
    output: {
        filename: './public/js/bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.js/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'react']
              }
            }
        ]
    },
    devtool: 'source-map'
}
