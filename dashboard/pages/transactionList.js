const commands = {
  search(filter) {
    // return this
    //   .waitForElementVisible('@emailInput')
    //   .setValue('@emailInput', email)
    //   .setValue('@passInput', pass)
    //   .waitForElementVisible('@loginButton')
    //   .click('@loginButton')    
  },
  nextPage() {

  },
  prevPage() {

  }
}

export default {
  url: 'http://localhost:1999/transactions',
  commands: [commands],
  elements: {
    emailInput: {
      selector: 'input[type=text]'
    },
    passInput: {
      selector: 'input[name=password]'
    },
    loginButton: {
      selector: 'button[type=submit]'
    }
  }
}
