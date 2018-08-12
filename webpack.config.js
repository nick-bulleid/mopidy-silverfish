const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
    },
    mode: 'development',
    serve: {
        content: path.resolve(__dirname, 'mopidy_silverfish/static')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|orf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};