const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackSystemRegister = require('webpack-system-register');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    entry: {
        index: "./src/index.vue"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ManifestPlugin(),
        new WebpackSystemRegister({
            // systemjsDeps: [
            //     /^react/, // any import that starts with react
            //     'react-dom', // only the `react-dom` import
            //     /^lodash/, // any import that starts with lodash
            // ],
            // registerName: 'test-module', // optional name that SystemJS will know this bundle as.
        })
    ]
}