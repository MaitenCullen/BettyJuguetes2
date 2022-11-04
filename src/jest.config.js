module.exports = {
    coverageThreshold: {
      global: {
        branches: 60,
        functions: 75,
        lines: 75,
        statements: 75,
      },
    },
    coverageReporters: ['text', 'text-summary', 'html'],
    testPathIgnorePatterns: [
      '<rootDir>/.next/',
      '<rootDir>/node_modules/', 
      '<rootDir>/cypress/',
    ],
    setupFiles: ['<rootDir>/.jest/env.js'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\\.(svg)$': '<rootDir>/jest.svgImportMock.js',
    },
    transform: {
      '^.+\\.svg$': 'jest-svg-transformer',
      '\\.[j]sx?$': 'babel-jest',
    },
  };