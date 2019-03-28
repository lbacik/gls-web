
module.exports = (app, glsWeb) => {

    const LOCAL_URI = '/lo'
    const DB_URI = '/db'

    app.get('/', (req, res) => {
        res.status(301).redirect(`${LOCAL_URI}`)
    })

    app.get('/code-generator', (req, res) => {
        res.render('data', {
            data: glsWeb.code()
        })
        res.end()
    })

    app.get(`${LOCAL_URI}/:name?`, (req, res) => {
        const data = glsWeb.local(req.params.name)
        data.uri = LOCAL_URI
        res.render('canvas', data)
        res.end()
    })

    app.get(`${DB_URI}/:name?`, (req, res) => {

        glsWeb
            .db(req.params.name)
            .then(data => {
                data.uri = DB_URI
                res.render('canvas', data)
                res.end()
            })
    })
}
