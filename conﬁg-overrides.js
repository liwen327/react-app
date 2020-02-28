const { addDecoratorsLegacy } = require("customize-cra");

module.exports = override(addDecoratorsLegacy())   ////配置装饰器器

const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    // antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "red" }
  })
);