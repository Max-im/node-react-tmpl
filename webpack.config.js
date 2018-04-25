module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'},
                    {loader: 'eslint-loader'}
                ]
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use:  [
                    { loader: "style-loader" }, 
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                    { loader: "sass-loader" }
                  ]
            } 
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    }
};