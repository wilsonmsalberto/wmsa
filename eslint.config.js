const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const prettier = require('eslint-plugin-prettier');
const importPlugin = require('eslint-plugin-import');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'public/**',
      '.cache/**',
      'dist/**',
      'build/**',
    ],
  },
  js.configs.recommended,
  ...compat.extends('airbnb', 'prettier', 'plugin:react/jsx-runtime'),
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        browser: true,
        es6: true,
        node: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: '.',
        },
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unescaped-entities': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.[jt]s',
            '**/*.spec.[jt]s',
            '**/*.test.[jt]sx',
            '**/*.spec.[jt]sx',
          ],
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          js: 'never',
          jsx: 'never',
        },
      ],
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'no-use-before-define': [0],
      'import/no-unresolved': 0,
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.ts',
            '**/*.spec.ts',
            '**/*.test.tsx',
            '**/*.spec.tsx',
          ],
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-array-constructor': 'off',
    },
  },
];
