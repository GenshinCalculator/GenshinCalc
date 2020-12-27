moduleo = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: [
    'import',
    'prettier',
    'react',
    'react-redux',
    'react-hooks',
    'babel',
  ],
  rules: {
    'import/prefer-default-export': ['off'],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-use-before-define': ['off'],
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-multi-comp': ['off'],
    'react/state-in-constructor': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/prefer-default-export': ['off'],
  },
};
