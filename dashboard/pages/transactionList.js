const commands = {
  filter(filter) {
    return this
      .waitForElementVisible('@filterInput')
      .setValue('@filterInput', filter)
      .waitForElementVisible('@submitButton')
      .click('@submitButton')
  },
}

export default {
  url: 'http://localhost:1999/transactions',
  commands: [commands],
  elements: {
    filterInput: {
      selector: 'input[type=search]'
    },
    submitButton: {
      selector: 'button[type=submit]'
    },
    emptyState: {
      selector: '.EmptyList__empty__1pTM6'
    }
  }
}
