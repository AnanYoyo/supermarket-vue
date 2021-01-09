module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src' 此别名已有，默认配置
        // cli3 支持将配置的别名在这使用
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}