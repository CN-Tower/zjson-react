const path = require('path');
const {override, fixBabelImports, addLessLoader, addWebpackAlias } = require("customize-cra");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: '[local]--[hash:base64:5]' 
  }),
  addWebpackAlias({
      "@": path.resolve(__dirname, 'src')
  }),
);
