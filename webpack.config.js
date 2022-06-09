const path = require('path');

module.exports = {
    mode: 'production',
    entry: "./src/random-key.mjs",
    output: {
        path: path.resolve(__dirname),
        filename: "index.js",
        library:{
            type: "commonjs-static",
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-proposal-class-properties"],
                        }
                    }
                ],
            }
        ],
    },
};