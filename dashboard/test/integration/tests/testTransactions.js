export default {
  'View empty transaction filter results': (browser) => {
    const transactionList = browser.page.transactionList()

    transactionList
      .navigate()
      .filter("id='fake'")

    transactionList.expect.element('@emptyState').text.to.contain('No results for query')

    browser.end()
  },

  'Issue and retire assets': (browser) => {
    const transactionForm = browser.page.transactionForm()
    const transactionSingle = browser.page.transactionSingle()

    transactionForm
      .navigate()
      .addIssue('gold-' + browser.globals.testUuid, 100)
      .addRetire('gold-' + browser.globals.testUuid, 100)
      .submitTransaction()

    transactionSingle.expect.element('@successFlash').to.be.present

    browser.end()
  }
}
