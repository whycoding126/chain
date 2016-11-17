const txListCommands = {
  filter(filter, client) {
    return this
      .waitForElementVisible('@filterInput')
      .setValue('@filterInput', [filter, client.keys.ENTER])
      .submitForm('@filterForm')
  },
}

module.exports = {
  url: 'http://localhost:3000/transactions',
  commands: [txListCommands],
  elements: {
    filterInput: {
      selector: 'input[type=search]'
    },
    filterForm: {
      selector: 'form'
    },
    emptyState: {
      selector: '#EmptyList'
    }
  }
}
