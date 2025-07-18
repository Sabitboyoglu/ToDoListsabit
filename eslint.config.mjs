// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-undef': 'off', // Disable no-undef rule
  },
  vue: true,
  typescript: true,
})
