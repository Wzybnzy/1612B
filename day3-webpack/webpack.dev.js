const path = require('path');
const ExtractTextWebpackPLugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPLugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports={
    entry:{
        index:path.join(__dirname,'./src/index.js'),
        app:path.join(__dirname,'./src/app.js')
    },// String | Array | Object
    output:{
        path:path.join(__dirname,'build'),
        filename:'[name]-[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
                
            },
            {
                test:/\.scss$/,
                use:ExtractTextWebpackPLugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
                // use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                loader:'url-loader',
                options:{
                    limit:4000
                }
            },
            {
                test:/\.(eot|svg|ttf|woff)$/,
                loader:'file-loader',
                options:{
                    name:'./font/[name].[ext]'
                }
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPLugin('style.css'),
        new CleanWebpackPLugin(),
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'app.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:9096,
        open:true,
        // inline:true,
        hot:true,
        host:'localhost',
        before(app){// middleware
            app.get('/api/list',(req,res,next)=>{
                res.send({code:0,mes:'成功'});
            });
        },
        proxy:{
            '/classify/iconlist':'http://localhost:3000'
        }
    },
    resolve:{
        alias:{
           
        }
    }
}