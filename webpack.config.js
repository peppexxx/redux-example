const path = require('path');

module.exports = {
  mode: 'development',                      // modalità |development/production|    
  entry: './src/index.js',                  // file di input (index.js)
  output: {                         
    filename: 'bundle.js',                  // file di output
    path: path.resolve(__dirname, 'dist'),  // percorso di output
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};