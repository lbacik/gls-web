
const express = require('express')
const routes = require('./src/routes')

const Gls = require('@lbacik/gls/src/gls/gls')

const app = express()

const port = process.env.PORT || 3000

const gls = new Gls()

app.set('view engine', 'pug')
app.set('views', './src/views')

routes(app, gls)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
