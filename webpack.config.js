const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|dist)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|dist)/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    }
};