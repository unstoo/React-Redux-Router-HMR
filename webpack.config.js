const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [    
    // activate HMR for React
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    'webpack/hot/only-dev-server',

    './client/index.js'
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // necessary for HMR to know where to load the hot update chunks.
    publicPath: '/static/',
  },

  devtool: 'eval',

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  devServer: {
    hot: true,
    compress: true,
    port: 8080,
    // respond to 404s with index.html
    historyApiFallback: true,    
    // necessary if you want to serve static files.
    contentBase: path.join(__dirname, 'client'),    
    // The bundled files will be available in the browser under this path
    publicPath: '/static/',
    stats: 'errors-only'
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ],

  module: {
    rules: 
    [      
      { 
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { 
          presets: [ ["es2015", {"modules": false}],  "react"  ],          
          plugins: ['react-hot-loader/babel']
         }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]    
  }
}