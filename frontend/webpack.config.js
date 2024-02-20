const path = require("path");

module.exports = {
  entry: './src/main.jsx', //Path to entry file
  output: {
    filename: 'bundle.js', //Name of the bundle file
    path: path.resolve(__dirname, 'public'), //Where you store your bundle file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};