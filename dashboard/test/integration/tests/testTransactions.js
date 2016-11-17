export default {
  'View empty transaction filter results': (browser) => {
    const transactionList = browser.page.transactionList()

    transactionList
      .navigate()
      .filter("id='fake'")

    transactionList.expect.element('@emptyState').text.to.contain('No results for query')

    browser.end()
  },

  'Create transaction': (browser) => {
    const transactionForm = browser.page.transactionForm()

    transactionForm
      .navigate()
      .addIssue('', 0)

    browser.saveScreenshot('1.png')

    browser.end()
  }
}
