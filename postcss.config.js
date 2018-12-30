const cssnext = require('postcss-preset-env')
module.exports = {
  plugins: [
    postcssPresetEnv({
      features: {
        customProperties: {
          preserve: true
        }
      }
    })
  ]
}
