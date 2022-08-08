module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Components': './src/components',
          '@Navigation': './src/navigation',
          '@Screens': './src/screens',
          '@Types': './src/types',
          '@GlobalStyle': './src/styles',
          '@Assets': './assets',
          '@Utils': './src/utils',
          '@Src': './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
