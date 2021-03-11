const withPlugins = require("next-compose-plugins");

const config = {};

module.exports = withPlugins(
    [
        [require('next-optimized-classnames')]
    ],
    config,
);
