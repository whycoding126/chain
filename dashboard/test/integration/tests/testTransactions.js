export default {
  'View empty transaction filter results': (client) => {
    const transactionList = client.page.transactionList()

    transactionList
      .navigate()
      .filter("id='fake'")

    transactionList.expect.element('@emptyState').text.to.contain('No results for query')

    client.end()
  },

  'Create transaction': (client) => {
    const transactionList = client.page.
  }
}
