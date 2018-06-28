const path = require('path')
const webpack = require('webpack')
const mix = require('laravel-mix')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix
  .js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .sourceMaps()
  .disableNotifications()
  .copyDirectory('resources/assets/img', 'public/img')

if (mix.inProduction()) {
  mix.version();

  mix.extract([
    'vue',
    'vform',
    'axios',
    'vuex',
    'vue-i18n',
    'vue-meta',
    'js-cookie',
    'vue-router',
    'vuetify',
    'vee-validate',
    'vuex-router-sync'
  ])
}

mix.webpackConfig({
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  resolve: {
    alias: {
      '~': path.join(__dirname, './resources/assets/js')
    }
  }
});

mix.browserSync('last');