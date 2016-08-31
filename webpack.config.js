'use strict';

module.exports = {
  entry: {
    app: './src/client/Bootstrap.tsx'
  },
  output: {
    path: __dirname + '/public/assets/javascripts',
    filename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }
    ],
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  //externals: {
  //  'react': 'React',
  //  'react-dom': 'ReactDOM'
  //}
};
