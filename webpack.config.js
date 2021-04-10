const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * @type {(env: any, argv: import('webpack').CliConfigOptions) => import('webpack').Configuration}
 */
function getWebpackConfig(env, argv) {
    const mode = argv.nodeEnv || argv.mode || 'production';

    const copyPlugin = new CopyWebpackPlugin({
        patterns: [
            { from: './some-file*.txt', },
        ]
    });

    return {
        mode,
        entry: './index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [ copyPlugin ],
    };
}

module.exports = getWebpackConfig;
