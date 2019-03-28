
const fs = require('fs');
const path = require('path')
const Provider = require('../provider')

class LocalProvider extends Provider {

    constructor(path) {
        super(true)
        this.path = path
    }

    list() {
        let result = []
        fs.readdirSync(this.path).forEach(file => {
            if (path.extname(file) === '.json') {
                result.push(path.basename(file, '.json'))
            }
        });
        return result
    }

    get(name) {
        let data
        try {
            const content = fs.readFileSync(`${this.path}/${name}.json`)
            data = JSON.parse(content)
        } catch (err) {
            data = undefined
        }
        return data
    }
}

module.exports = LocalProvider
