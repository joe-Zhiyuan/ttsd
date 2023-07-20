const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // eslint 去除警告
  lintOnSave: false
})
