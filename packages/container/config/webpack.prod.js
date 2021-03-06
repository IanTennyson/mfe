const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        //Name = the file that was created
        // Hash = the contents of the file
        // We do this for cache issues. (Remember the golden rules)
        filename: '[name].[contenthash].js',
        // publicPath - This is used any time some part of webpack tries to refer to a file that has been 'built' by webpack.
        // Fixes - main.d8f4fed242ec71d19ba3.js:1 Uncaught SyntaxError: Unexpected token '<'
        // The above "main.*.js" needs "/container/latest/" prepended to it.
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                // GOLDEN RULE
                // Location of child app 'remoteEntry.js' MUST be known at build time.
                // Question: What's with the '/marketing'
                // Ans: We are ASSUMING that all child apps will be set to the same 'domain' with sub directories named after them.
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
