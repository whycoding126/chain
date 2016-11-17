const txListCommands = {
  addIssue(asset, amount) {
    return this
      // .waitForElementVisible('@filterInput')
      // .setValue('@filterInput')
      // .submitForm('@filterForm')
  },
  addRetire(asset, amount) {
    return this
  }
}

module.exports = {
  url: () => this.api.launchUrl + '/transactions/create',
  commands: [txListCommands],
  elements: {

  }
}
