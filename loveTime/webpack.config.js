//var Webpack = require("webpack");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/script/mylove.js'
    },
    //入口文件输出配置
    output: {
        path: 'src/script',
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'D:/working/Bdlhy/Bdlhy.github.io/loveTime', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            
        }
    }
};