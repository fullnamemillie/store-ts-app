// const path = require('path');
// module.exports = {
//   webpack: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// };

const { CracoAliasPlugin } = require('react-app-alias');
const logWebpackConfig = require('./craco.webpack');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
    {
      plugin: logWebpackConfig,
    },
  ],
};
