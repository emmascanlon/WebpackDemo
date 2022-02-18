var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //first entry indicates current directory, second is the subdirectory
        filename: 'bundle.js',
        publicPath: '/dist/' // this has to do with webpack dev server
    },

    // a module is basically every import you have (like the two variable we are exporting from domloader), 
    // css files also could be modules if we wanted to import them. ???? (think about this)
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           title: 'Webpack demo',
           filename: 'something-other-than-index.html',
           inject: 'body',
       })
   ]
}