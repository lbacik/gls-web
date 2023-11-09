
const axios = require('axios')

const GLS_DEF_ALL_ID = process.env.GLS_DEF_ALL_ID

class GlsApiClient
{
    glsData = []

    constructor(url) {
        this.url = url
    }

    async list() {
        let entities = []

        try {
            entities = await axios
                .get(`${this.url}/api/entities-by-definition/${GLS_DEF_ALL_ID}`)
                .then(response => response.data.entities)
        } catch (e) {
            console.log(e)
        }

        this.glsData = entities.map(item => item.data)
        return entities.map(item => item.data.name)
    }

    get(name) {
        let result = {}
        for(let i = 0; i < this.glsData.length; i++) {
            if (this.glsData[i].name === name) {
                result.worms = this.glsData[i].worms
            }
        }

        return new Promise((resolve, reject) => {
            resolve(result)
        })
    }

    static create(url) {
        return new GlsApiClient(url)
    }
}

module.exports = GlsApiClient
