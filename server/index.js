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
const fs = require('fs')
require('dotenv').config()

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const publicDir = path.join(__dirname, '..', 'public')
// app.use('/public', express.static(publicDir))
app.use(express.static(publicDir))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

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
// app.get('/*', (_, res) => res.sendFile(path.join(publicDir, 'index.html')))

app.get('*', (_, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(publicDir, 'index.html'))
  } else {
    const indexPath = path.join(publicDir, 'index.html')
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath)
    } else {
      next()
    }
  }
})

// eslint-disable-next-line no-console
app.listen(port, () => console.log('Server is running and ready for you'))

app.post('/api/form', (req, res) => {
  const data = req.body

  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.REACT_APP_COMPANY_USER_EMAIL,
      pass: process.env.REACT_APP_COMPANY_EMAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: data.email,
    to: process.env.REACT_APP_COMPANY_RECIPIENT_EMAIL,
    subject: `Inquiry from monaTech website`,
    html: `
  <div style='font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; background-color: #f4f1fa; padding: 30px; border-radius: 5px;'>
    <div style='text-align: center; margin-bottom: 30px;'>
      <img src='/assets/black.webp' alt='MonaTech Logo' style='max-width: 200px; height: auto;'>
    </div>
    <h1 style='background-color: #0f0c29; color: #fff; padding: 15px 20px; font-size: 28px; margin: 0 0 30px; border-radius: 5px;'>MonaTech Inquiry</h1>
    <h3 style='font-size: 22px; margin: 0 0 15px; color: #333;'>Client Details</h3>
    <ul style='list-style-type: none; padding: 0;'>
      <li style='margin-bottom: 10px;'><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
      <li style='margin-bottom: 10px;'><strong>Company or URL:</strong> ${data.companyName}</li>
      <li style='margin-bottom: 10px;'><strong>Email:</strong> ${data.email}</li>
      <li style='margin-bottom: 10px;'><strong>Phone:</strong> ${data.phoneNumber}</li>
      <li style='margin-bottom: 10px;'><strong>Time/Date User Sent Inquiry:</strong> ${data.timeStamp}</li>
      <li style='margin-bottom: 10px;'><strong>Project start date:</strong> ${data.startDate}</li>
      <li style='margin-bottom: 10px;'><strong>Marketing Data (where they heard about us):</strong> ${data.whereDidYouHearAboutUs}</li>
    </ul>
    <h3 style='font-size: 22px; margin: 30px 0 15px; color: #333;'>Message</h3>
    <p style='margin: 0;'>${data.message}</p>
  </div>
`,
  }

  smtpTransport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error)
      res.status(500).send(`Error: ${error}`)
    } else {
      res.status(200).send('Success')
    }
  })

  smtpTransport.close()
})
