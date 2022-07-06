module.exports = {
  //上面这种方式是coderwhy讲的预设
  // presets: ['@vue/cli-plugin-babel/preset'],
  //配置可选链的plugin不好使以后presets变成了下面这种
  presets: ['@vue/app'],
  plugins: ['@babel/plugin-proposal-optional-chaining']
}
