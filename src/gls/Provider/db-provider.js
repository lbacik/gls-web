
const Provider = require('../provider')

class DbProvider extends Provider {

    constructor(client) {
        super(true)
        this.client = client
    }

    list() {
        return this.client.list()
    }

    get(name) {
        return this.client.get(name)
    }
}

module.exports = DbProvider
