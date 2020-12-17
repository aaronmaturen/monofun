module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/components/**/src/**/*.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text'],
  projects: ['<rootDir>/components/*/jest.config.js'],
  setupFilesAfterEnv: [
    'jest-extended',
    '@testing-library/jest-dom/extend-expect',
    'regenerator-runtime/runtime',
    'jest-axe/extend-expect',
  ],
  testPathIgnorePatterns: [
    '/coverage/',
    '/node_modules/',
    '/dist/',
  ],
  transform: {
    '^.+\\.(j|t)s(x)?$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
