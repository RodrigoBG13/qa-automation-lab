module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    paths: ['features/**/*.feature'],
    require: ['features/steps/**/*.ts', 'support/**/*.ts'],
    format: ['progress-bar', 'html:cucumber-report.html']
  }
}