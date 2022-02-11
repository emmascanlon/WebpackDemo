var path = require('path');
var webpack = require('webpack');

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
   }
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin({
// // you could specify how you minify the bundle file.  That's why you might want to do this instead of using -p
//         })
//     ]
}