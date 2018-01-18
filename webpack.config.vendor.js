var webpack=require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const allModules = [
    'bootstrap',
    'bootstrap/dist/css/bootstrap.css',
    'jquery'
];

module.exports = ()=>{
    const extractCSS = new ExtractTextPlugin('vendor.css');
    var config=
    {
        entry:{
            vendor:allModules
        },
        module: {
            rules: [
                { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
                { test: /\.css(\?|$)/, use: extractCSS.extract({ use: 'css-loader'}) }
            ]
        },
        output: { 
            publicPath: 'dist/',
            filename: '[name].js',
            library: '[name]_[hash]',
            path: path.join(__dirname, 'dist') 
        },
        plugins: [
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
            extractCSS,
            new webpack.DllPlugin({
                path: path.join(__dirname,"dist", "[name]-manifest.json"),
                name: "[name]_[hash]"
            })
        ]
    }
    return config;
};