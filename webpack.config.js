const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let entryPoint = './src/main.js';
let exportPath = path.resolve(__dirname, './build');
var plugins = [];

const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].css',
});

plugins.push(extractSass);
plugins.push(new HTMLWebpackPlugin({
    template: './index.html'
}));

// var env = process.env.WEBPACK_ENV;

// if (env === 'production') {
//     plugins.push(new webpack.DefinePlugin({
//         'process.env': {
//             WEBPACK_ENV: '"production"'
//           }
//     }));

// }

module.exports = {
    entry: {
        main: entryPoint,
    },
    output: {
        filename: '[name].js',
        path: exportPath
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: extractSass.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'vue-router$': 'vue-router/dist/vue-router.esm.js',
            'vue-resource$': 'vue-resource/dist/vue-resource.es2015.js',
            'moment$': 'moment/moment.js'
        }
    },
    plugins
};
