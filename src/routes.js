
const Generator = require('@lbacik/gls/src/generator/generator')

module.exports = function(app, gls) {

    const bodyParser = require('body-parser')
    const jsonParser = bodyParser.json()

    app.get('/canvas', (req, res) => {
        res.render('canvas', {
            canvas_id: "canvas01",
            code: Generator.code()
        })
        res.end()
    })

    app.get('/code-generator', (req, res) => {
        res.render('data', {
            data: Generator.code()
        })
        res.end()
    })
}
