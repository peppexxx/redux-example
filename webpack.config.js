const path = require('path');

module.exports = {
  mode: 'development',                      // modalità |development/production|    
  entry: './src/index.js',                  // file di input (index.js)
  output: {                         
    filename: 'bundle.js',                  // file di output
    path: path.resolve(__dirname, 'dist'),  // percorso di output
  },
  module: {                                 // aggiungiamo dei caricatori
      rules: [                              
          {
            test: /\.css$/, 
            use: ['style-loader', 'css-loader'],  // caricatore di css sass ..
          },
          {
            test: /\.ts$/, 
            use: ['ts-loader'],  // caricatore di typescript ..
          }
      ]
  },
  devServer: {                                    // aggiugiamo un server di sviluppo
    // sockPort: 8080
    // sockPath: '/socket',
    // sockHost: 'myhost.test'
    // https: true,
    // key: fs.readFileSync('/path/to/server.key'),
    // cert: fs.readFileSync('/path/to/server.crt'),
    // ca: fs.readFileSync('/path/to/ca.pem'),
    // host: '0.0.0.0'                            // host da utilizzare
    contentBase: path.join(__dirname, 'dist'),    // path di ingresso (cercherà l'html)
    // contentBasePublicPath:                     // indica al server in quale URL fornire devServer.contentBasecontenuto statico.
    compress: true,                               // abilita la compressione gzip per tutto ciò che viene servito
    port: 5000,                                   // porta
    allowedHosts: [                               // domini consentiti che possono accedere al server (cors)
      // 'host.com',
      // 'subdomain.host.com',
      // 'subdomain2.host.com',
      // 'host2.com'
      // webpack serve --entry ./entry/file --output-path ./output/path --allowed-hosts .host.com,host2.com
    ],
    headers: {              // aggiungiamo un intestazione alla risposta
      //'X-Custom-Foo': 'bar'
    }
  }
};