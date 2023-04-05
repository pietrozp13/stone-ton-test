module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/jest/setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  resolver: '<rootDir>/resolver.js',
};
