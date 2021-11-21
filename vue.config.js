const path = require('path');
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, './src/assets/global-scss')],
        },
      },
    },
  },
};
