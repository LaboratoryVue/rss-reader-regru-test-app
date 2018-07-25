const { join, resolve } = require('path');

const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const HtmlTemplatePlugin = require('html-webpack-template');
const cors = require('cors');
const axios = require('axios');
// RSS URLS
const VUE_RSS = 'https://vuejsfeed.com/feed';
const REGRU_RSS = 'https://www.reg.ru/company/news/rss';
//
let Parser = require('rss-parser');
// import Parser from 'rss-parser';
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
        // async () => {
        //   let feed = await parser.parseURL('https://www.reddit.com/.rss');
        //   res.send(feed);
        //   // console.log(feed.title);
        // }
        (async () => {

          let feed = await parser.parseURL(REGRU_RSS);
          // console.log(feed.title);
          // console.log(feed);
          res.send(feed);

          // feed.items.forEach(item => {
          //   console.log(item.title + ':' + item.link)
          // });

        })();
        // axios
        //   .get(REGRU_RSS)
        //   .then(response => {
        //     res.send(response.data);
        //   })
        //   .catch(e => console.log(e));
      });
    }
  }
};
