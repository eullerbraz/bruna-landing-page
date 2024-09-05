import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    files: ['*.astro'],
    parser: 'astro-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      extraFileExtensions: ['.astro'],
    },
    rules: {
      'comma-dangle': [2, 'always-multiline'],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
