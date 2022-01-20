const path = require('path')
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entries = fs.readdirSync('./src/components')
  .reduce((acc, id) => ({
    ...acc,
    [id]: [`./src/components/${id}/index.ts`]
  }), {});

module.exports = {
  entry: entries,
  externals: [nodeExternals(), 'react', 'react-dom'],
  output: {
    filename: 'components/[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
    library: ['Lego', '[name]'],
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'components/[name]/[name].css'
  })],
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  }
}
