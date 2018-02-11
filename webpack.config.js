var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // path: './dist' // 这种写法在linux会找不到路径
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                        },
                    },
                ],
            },
        ],
    },
};
