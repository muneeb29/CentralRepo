module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":"jest-transform-stub",
    '^.+\\js$': 'babel-jest',
  },
  moduleNameMapper: {
    "\\.(css|scss|png|svg)$": "identity-obj-proxy"
  },
}
