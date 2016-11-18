const txListCommands = {
  // filter(filter) {
  //   return this
  //     .waitForElementVisible('@filterInput')
  //     .setValue('@filterInput', filter)
  //     .submitForm('@filterForm')
  // },
}

module.exports = {
  commands: [txListCommands],
  elements: {
    successFlash: {
      selector: '[data-name="flash"][data-type="success"]'
    }
  }
}
