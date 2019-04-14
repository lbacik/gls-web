
const path = require('path')
const express = require('express')

const routes = require('./src/routes')
const GlsWeb = require('./src/gls/gls-web')

const app = express()

const port = process.env.PORT || 3000
const LOCAL_EXAMPLES = process.env.LOCAL_EXAMPLES || path.resolve(__dirname, './examples/')
const GLS_API_URL = process.env.GLS_API_URL

const glsWeb = new GlsWeb(LOCAL_EXAMPLES, GLS_API_URL)

app.set('view engine', 'pug')
// zeit requirement
app.engine('pug', require('pug').__express)

// views folder
app.set("views", path.resolve(__dirname, "./src/views"));
// app.set('views', './src/views')

// app.get("*", (req, res) => {
//     res.set(
//         "cache-control",
//         "s-maxage=31536000, maxage=0, stale-while-revalidate=31536000, stale-if-error=31536000"
//     );
//     res.render("index");
// });

routes(app, glsWeb)

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
