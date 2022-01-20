module.exports = {
  collectCoverageFrom: [
    '**/*.{ts|tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['./enzyme.js'],
  testPathIgnorePatterns: ['/node_modules/', 'jest-test-results.json'],
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
    '^.+.(svg)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '\\.svg$': '<rootDir>/__mocks__/svg.ts',
    "^src(.*)$": "<rootDir>/src$1",
    "^__mocks__(.*)$": "<rootDir>/__mocks__$1",
  },
}
