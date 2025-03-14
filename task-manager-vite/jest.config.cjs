module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  }
};
