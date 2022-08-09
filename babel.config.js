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
          '@Assets': './src/assets',
          '@Utils': './src/utils',
          '@Redux': './src/redux',
          '@Src': './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.png'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
