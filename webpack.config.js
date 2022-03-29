const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development', 
    // entry
entry: "./src/js/app.js",
    // output 
output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[contenthash].js'
},
// plugins
plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
})],
 // loaders
module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}

}