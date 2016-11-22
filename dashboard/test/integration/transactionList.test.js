import assert from 'assert'
const Browser = require('zombie')

// Browser.localhost('localhost:3000', 3000)

describe('Transaction list', () => {
  const browser = new Browser()

  before(done => {
    browser.visit('http://localhost:3000/transactions', done);
  })

  describe('Submit a filter with no results', () => {
    before(done => {
      browser
        .fill('input[type=search]', 'id="fake"')
        .pressButton('input[type=submit]', done);
    })

    it('should display the empty results screen', () => {
      browser.assert.element('[data-name="emptyList"]')
    })

    it('should display the query submitted', () => {
      browser.assert.text('code', 'id="fake"')
    })

    it('should link to filter documentation', () => {
      browser.assert.link('a', 'Queries', '/docs/core/build-applications/queries')
    })

    it('should not display any transactions', () => {
      browser.assert.elements('[data-name="transactionItem"]', 0)
    })

    it('should not show a flash error', () => {
      browser.assert.elements('[data-name="flash"][data-type="error"]', 0)

    })
  })

  describe('Submit a bad filter', () => {
    before(done => {
      browser
        .fill('input[type=search]', 'bad=query=here')
        .pressButton('input[type=submit]', done);
    })

    it('should show a flash error', () => {
      browser.assert.element('[data-name="flash"][data-type="danger"]')
    })

    it('should display the query submitted', () => {
      browser.assert.text('code', 'bad=query=here')
    })
  })
})