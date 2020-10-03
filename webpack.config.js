const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                    publicPath: '/public/path/to/',
                  }
                }
              ],
            test: /\.(png|svg|jpg|gif)$/,
            use: [
            'file-loader',
            ],
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
            'file-loader',
            ],
    plugins: [
        new MiniCssExtractPlugin('css/mystyles.css'),
      ]
        }],
    },
};