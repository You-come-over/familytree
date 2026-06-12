const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: 'docs', // 将 dist 改为 docs
  publicPath: process.env.NODE_ENV === 'production' ? '/familytree/' : '/' // 替换为你的 GitHub 仓库名
})
