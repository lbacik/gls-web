require('dotenv').config()

const path = require('path')
const express = require('express')
const routes = require('./src/routes')
const GlsWeb = require('./src/gls/gls-web')

const app = express()

const port = process.env.PORT || 3000
const LOCAL_EXAMPLES = process.env.LOCAL_EXAMPLES || path.resolve('./examples/')
const GLS_API_URL = process.env.GLS_API_URL || 'https://jsonhub.cloud'

const glsWeb = new GlsWeb(LOCAL_EXAMPLES, GLS_API_URL)

app.set('view engine', 'pug')
app.set('views', './src/views')

routes(app, glsWeb)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
