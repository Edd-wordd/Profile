const express = require('express')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()
const port = process.env.PORT || 3000

const publicDir = path.join(__dirname, '..', 'public')
app.use('/public', express.static(publicDir))

app.use(helmet())

app.use(morgan('common'))
// Generic front-end route, React will handle client-side routing
app.get('/*', (_, res) => res.sendFile(path.join(publicDir, 'index.html')))

// eslint-disable-next-line no-console
app.listen(port, () => console.log('Server is running and ready for you'))
