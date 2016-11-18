const txFormCommands = {
  addIssue(asset, amount) {
    return this
      .waitForElementVisible('@addAction')
      .click('@addAction')
      .click('@addIssueActionLink')
      .waitForElementVisible('@issueAssetAlias')
      .setValue('@issueAssetAlias', asset)
      .setValue('@issueAmount', amount)
  },

  addRetire(asset, amount) {
    return this
      .waitForElementVisible('@addAction')
      .click('@addAction')
      .click('@addRetireActionLink')
      .waitForElementVisible('@retireAssetAlias')
      .setValue('@retireAssetAlias', asset)
      .setValue('@retireAmount', amount)
  },

  submitTransaction() {
    return this
      .click('@submitTransaction')
  }
}

module.exports = {
  url: function() {
    return this.api.launchUrl + '/transactions/create' },
  commands: [txFormCommands],
  elements: {
    submitTransaction: {
      selector: '[data-name="submit"]'
    },
    addAction: {
      selector: '[data-name="add-action"]'
    },
    addIssueActionLink: {
      selector: '//a[text()="Issue"]',
      locateStrategy: 'xpath',
    },
    addRetireActionLink: {
      selector: '//a[text()="Retire"]',
      locateStrategy: 'xpath',
    },
    issueAssetAlias: {
      selector: '[data-name="issue"] input[data-name="asset_alias"]'
    },
    issueAmount: {
      selector: '[data-name="issue"] input[data-name="amount"]'
    },
    retireAssetAlias: {
      selector: '[data-name="retire_asset"] input[data-name="asset_alias"]'
    },
    retireAmount: {
      selector: '[data-name="retire_asset"] input[data-name="amount"]'
    }

  }
}
