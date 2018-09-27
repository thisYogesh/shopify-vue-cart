/* eslint no-console:"off" */
const {resolve} = require('path')
const {getIfUtils} = require('webpack-config-utils')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = env => {
    const {ifProd, ifNotProd} = getIfUtils(env)
    const config = {
        context: resolve('src'),
        entry: {
            'vue-cart': './vue-cart.js',
        },
        output: {
            filename: '[name].js',
            path: resolve('dist'),
            publicPath: '/dist/',
            pathinfo: ifNotProd(),
        },
        devtool: ifProd('source-map', 'eval'),
        watch: ifNotProd(),
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loaders: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                },
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
                // vue: 'vue/dist/vue.js'
            }
        },
    }
    if (env.debug) {
        console.log(config)
        debugger // eslint-disable-line
    }
    return config
}