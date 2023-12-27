const path = require('path')
const isDEV = process.env.NODE_ENV === 'development';
const moduleSource = isDEV ? 'src' : 'src';

module.exports = {
  title: 'styleguidist-broken',
  showSidebar: false,
  assetsDir: ['./'],
  theme: {
    baseBackground: '#fdfdfc',
    link: '#274e75',
    linkHover: '#90a7bf',
    border: '#e0d2de',
    font: ['Open Sans'],
    fontFamily: {
      base: '"Open Sans", "Helvetica", sans-serif',
    },
  },
  webpackConfig: {
    mode: isDEV ? 'development' : 'production',
    devtool: isDEV ? 'eval' : 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader?modules'],
        },
        {
          test: /\.svg$/,
          use: 'url-loader',
        },
      ],
    },
  },
}