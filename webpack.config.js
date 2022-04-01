var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    // entry
    entry: "./src/js/app.js",
    // output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle-[contenthash].js"
    },
    // loaders 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // plugins
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({template: './template.html'})]
}