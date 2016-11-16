export default {
  'View empty transaction filter results': (client) => {
    const transactionList = client.page.transactionList()

    transactionList.navigate()

    // transactionList.expect.element('@emptyState').text.to.contain('No results for query')

    client.end()
  }
}
