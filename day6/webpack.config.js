const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'build'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
               test:/\.(js|jsx)$/,
               loader:'babel-loader',
               options:{
                   presets:['@babel/preset-env'] 
               }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:9091,
        open:true,
        hot:true
    },
    resolve:{
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};