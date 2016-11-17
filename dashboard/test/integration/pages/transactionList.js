const txListCommands = {
  filter(filter) {
    return this
      .waitForElementVisible('@filterInput')
      .setValue('@filterInput', filter)
      .submitForm('@filterForm')
  },
}

module.exports = {
  url: function() {
    return this.api.launchUrl + '/transactions' },
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
