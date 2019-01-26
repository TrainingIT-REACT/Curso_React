// Librerías
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  optimization: {
    // Importamos todos los módulos desde un único runtime
    runtimeChunk: 'single',
    // Configuramos splitChunks
    splitChunks: {
      // Configuramos los grupos de chunks
      cacheGroups: {
        // Definimos un grupo vendor que contendrá las
        // librerías
        vendor: {
          // Apuntamos al entrypoint "vendor"
          test: 'vendor',
          // Le damos un nombre al chunk
          name: 'vendor',
          // Fuerza a Webpack a crear un chunk
          // de este grupo siempre
          enforce: true,
          // Selecciona todos los tipos de chunks,
          // síncronos y asíncronos
          chunks: 'all'
        }
      }
    }
  }
}
