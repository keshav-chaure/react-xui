var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
  },
  module : {    
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        use:
        {
          loader : 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: [APP_DIR+"/containers", "absolute/path/b"]
            }
        }]
    }
    ]
  }
};

module.exports = config;
