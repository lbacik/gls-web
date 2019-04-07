
const path = require('path')
const GlsFactory = require('@lbacik/gls')
const ProviderFactory = require('./Provider/factory')

class GlsWeb {

    constructor(localPath, dbUrl) {
        this.localProvider = ProviderFactory.local(localPath)
        this.dbProvider = ProviderFactory.db(dbUrl)
    }

    local(name) {
        let result = this.emptyResult()
        if (this.localProvider.enable === true) {
            Object.assign(result, GlsWeb.data(name, this.localProvider))
        }
        return result
    }

    db(name) {
        let result = this.emptyResult()

        if (this.dbProvider.enable === true) {

            return GlsWeb.dataPromise(name, this.dbProvider)
                .then(data => {
                    return Object.assign(result, data)
                })
        }

        return new Promise((resolve, reject) => {
            resolve(result)
        })
    }

    emptyResult() {
        return {
            localExamples: this.localProvider.enable,
            dbExamples: this.dbProvider.enable,
        }
    }

    static data(name, provider) {

        const list = provider.list()

        if (name === undefined && list.length > 0) {
            name = path.basename(list[0], '.json')
        }

        let glsData = provider.get(name)

        return {
            code: GlsWeb.code(),
            name: name,
            data: JSON.stringify(glsData),
            list: list,
        }
    }

    static dataPromise(name, provider) {

        return provider
            .list()
            .then(list => {
                if (name === undefined && list.length > 0) {
                    name = path.basename(list[0], '.json')
                }
                return provider
                    .get(name)
                    .then(glsData => {
                        return {
                            code: GlsWeb.code(),
                            name: name,
                            data: JSON.stringify(glsData),
                            list: list,
                        }
                    })
            })
    }

    static code() {
        return GlsFactory.codeGenerator().code()
    }
}

module.exports = GlsWeb

