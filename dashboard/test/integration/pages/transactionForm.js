const txListCommands = {
  addIssue(asset, amount) {
    return this
      .waitForElementVisible('@addAction')
      .click('@addAction')
      .click('@addIssueActionLink')
  },
  addRetire(asset, amount) {
    return this
  }
}

module.exports = {
  url: function() {
    return this.api.launchUrl + '/transactions/create' },
  commands: [txListCommands],
  elements: {
    addAction: {
      selector: '//button[text()="+ Add Action"]',
      locateStrategy: 'xpath',
    },
    addIssueActionLink: {
      selector: '//a[text()="Issue"]',
      locateStrategy: 'xpath',
    }
  }
}
