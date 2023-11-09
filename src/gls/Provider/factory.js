
const LocalProvider = require('./local-provider')
const DbProvider = require('./db-provider')
const GlsApiClient = require('./JsonHubClient/client')

class Factory {
  static local(path) {
    return new LocalProvider(path)
  }

  static db(url) {
    const client = GlsApiClient.create(url)
    return new DbProvider(client)
  }
}

module.exports = Factory
