const webpack = require('webpack');
const path = require('path');

module.exports = async ({ config, mode }) => {
  const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));

  const assetLoader = {
    loader: assetRule.loader,
    options: assetRule.options || assetRule.query
  };


  config.resolve.alias = {
    ...config.resolve.alias,
    src: path.resolve(__dirname, '../src'),
  };
  config.module.rules[4] = {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
    loader: './node_modules/file-loader/dist/cjs.js',
    query: {
      name: '/media/[name].[ext]',
    },
  };

  config.module.rules.unshift({
    test: /\.svg$/,
    use: ["@svgr/webpack", assetLoader]
  });

  return config;
};
