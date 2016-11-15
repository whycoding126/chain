export default {
  'View empty transaction filter results': (client) => {
    const transactionList = client.page.transactionList()

    transactionList
      .navigate()
      .filter('id="fake"')


    client.end()
  }
}
