const txListCommands = {
  filter(filter, client) {
    return this
      .waitForElementVisible('@filterInput')
      .setValue('@filterInput', [filter, client.keys.ENTER])
  },
}

module.exports = {
  url: 'http://localhost:1999/dashboard/transactions',
  commands: [txListCommands],
  elements: {
    filterInput: {
      selector: 'input[type=search]'
    },
    submitButton: {
      selector: 'input[type=submit]'
    },
    emptyState: {
      selector: '.EmptyList__empty__1pTM6'
    }
  }
}
