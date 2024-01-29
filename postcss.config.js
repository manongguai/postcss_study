const postcssPresetEnv = require("postcss-preset-env");
module.exports = {
  plugins: [
    require("stylelint")(),
    require("autoprefixer"),  // 自动补全浏览器兼容前缀
    postcssPresetEnv({
      stage: 0, // 要使用 css 最新的嵌套语法
    }),
    require("postcss-pxtorem")
  ],
};
