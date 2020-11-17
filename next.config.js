const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');

module.exports = withPlugins([withSass(), {
  async headers() {
    return [
      {
        source: '/login',
        headers: [

        ]
      }
    ];
  }
}]);
