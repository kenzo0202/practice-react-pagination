const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [path.resolve('src/index.js')],
  output: {
    path: path.resolve('www'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('www'),
    port: 3000,
    hot: false,
    inline: true,
    colors: true
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders:[
      {
        test: [/\.jsx$/,  /\.js$/],
        loaders: ['babel'],
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/flash-notification-react-redux")
        ]
      },
      { test: [/\.scss$/, /\.css$/], loader: "style-loader!css-loader" },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: "jquery"
    })
  ]
};
