import uuid from 'uuid'
import chain from '../../src/_chain'

const context = new chain.Context({
  url: 'http://localhost:1999'
})

const testUuid = uuid.v4()

module.exports = {
  // Global timeout for waitForXYZ calls 
  waitForConditionTimeout: 5000,

  testUuid,
  before: function(done) {

    // Create key
    let promise = new chain.MockHsm({alias: `key-${testUuid}`}).create(context)
    promise.then(key => {
      const keys = {quorum: 1, root_xpubs: [key.xpub]}

      // Create accounts
      new chain.Account({alias: `alice-${testUuid}`, ...keys}).create(context)
      new chain.Account({alias: `bob-${testUuid}`, ...keys}).create(context)

      // Create assets
      new chain.Asset({alias: `gold-${testUuid}`, ...keys}).create(context)
      new chain.Asset({alias: `silver-${testUuid}`, ...keys}).create(context)
    })

    done()
  },
  default: {} // required for non-env variables to be accessible everywhere
}
