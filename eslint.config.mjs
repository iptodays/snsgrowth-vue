// @ts-check
import withNuxt, { configs } from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    ...configs,
    rules: {
      "@typescript-eslint/no-explicit-any": "error"
    }
  }
)
