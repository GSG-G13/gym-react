module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'react-hooks/exhaustive-deps': 0,
  },
};
