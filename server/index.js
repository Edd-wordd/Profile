const express = require('express')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
const dotenv = require('dotenv')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const publicDir = path.join(__dirname, '..', 'public')
app.use('/public', express.static(publicDir))

app.use(helmet())
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig)
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  )
  app.use(webpackHotMiddleware(compiler))
}

app.use(morgan('common'))
// Generic front-end route, React will handle client-side routing
app.get('/*', (_, res) => res.sendFile(path.join(publicDir, 'index.html')))

// eslint-disable-next-line no-console
app.listen(port, () => console.log('Server is running and ready for you'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.post('/api/form', (req, res) => {
  const data = req.body

  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.REACT_APP_COMPANY_EMAIL,
      pass: process.env.REACT_APP_COMPANY_EMAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: data.email,
    to: process.env.REACT_APP_COMPANY_EMAIL,
    subject: `Inquiry from monaTech`,
    html: `
      <h3>Details</h3>
      <ul>
        <li>Client Name: ${data.firstName} ${data.lastName}</li>
        <li>Company or URL: ${data.companyName}</li>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phoneNumber}</li>
        <li>Time User Sent Inquiry: ${data.timeStamp}</li>
        <li>Project start date: ${data.startDate}</li>
        <li> Marketing Data (where they heard about us): ${data.whereDidYouHearAboutUs}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>
    `,
  }
  smtpTransport.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).send(`Error: ${error}`)
    } else {
      res.status(200).send('Success')
    }
  })

  smtpTransport.close()
})

// const myHeaders = new Headers()
// myHeaders.append('apikey', process.env.REACT_APP_PHONE_NUMBER_API_KEY)
//
// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders,
// }
//
// console.log(requestOptions)
// app.post('/api/phone', (req, res) => {
//   const data = req.body
//   const phone = data.phoneNumber
//   const url = `https://api.apilayer.com/number_verification/validate?number=${phone}`
//
//   fetch(url, requestOptions)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json)
//       res.send(json)
//     })
//     .catch((err) => {
//       res.send(err)
//     })
// })
