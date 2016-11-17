import uuid from 'uuid'
import chain from '../../src/_chain'

const context = new chain.Context({
  url: 'http://localhost:1999'
})

const testUuid = uuid.v4()
let _xpub = ''

module.exports = {
  // Global timeout for waitForXYZ calls
  waitForConditionTimeout: 5000,

  // UUID to reference throughout test run
  testUuid,

  // Xpub to use for creating objects in test run
  xpub: () => _xpub,

  // Chain Core global state setup
  before: (done) => {
    // Create key
    let promise = new chain.MockHsm({alias: `key-${testUuid}`}).create(context)
    promise.then(key => {
      _xpub = key.xpub
      const keys = {quorum: 1, root_xpubs: [_xpub]}

      // Create accounts
      new chain.Account({alias: `alice-${testUuid}`, ...keys}).create(context)
      new chain.Account({alias: `bob-${testUuid}`, ...keys}).create(context)

      // Create assets
      new chain.Asset({alias: `gold-${testUuid}`, ...keys}).create(context)
      new chain.Asset({alias: `silver-${testUuid}`, ...keys}).create(context)
    })

    done()
  },

  // required for non-env variables to be accessible everywhere
  default: {}
}
