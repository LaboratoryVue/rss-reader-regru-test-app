const { join, resolve } = require('path');

const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const HtmlTemplatePlugin = require('html-webpack-template');
// TO BYPASS CORS
const cors = require('cors');
// RSS URLS
const REGRU_RSS = 'https://www.reg.ru/company/news/rss';
// XML PARSER
let Parser = require('rss-parser');
let parser = new Parser();

module.exports = {
  context: __dirname,
  entry: join(__dirname, 'src/index.js'),
  output: join(__dirname, 'public/bundle.js'),

  resolve: {
    modules: [resolve('./src/'), resolve('./node_modules')]
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: HtmlTemplatePlugin,
      inject: false,
      mobile: true,
      appMountId: 'app'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`
      }
    })
  ],

  devServer: {
    contentBase: './public/',
    hot: true,
    port: 9000,
    setup(app) {
      app.use(cors());
      app.get('/feed', function(req, res) {
        (async () => {
          let feed = await parser.parseURL(REGRU_RSS);
          res.send(feed);
        })();
      });
    }
  }
};
