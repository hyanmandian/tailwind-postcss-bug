const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(rollupConfig) {
    rollupConfig.plugins.push(postcss({ sourcemap: true }));

    return rollupConfig;
  },
};
