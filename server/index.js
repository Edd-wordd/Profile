const express = require('express')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
const smtpTransport = require('nodemailer/lib/mailer')

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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to my app!')
})

app.post('/api/form', (req, res) => {
  let data = req.body
  console.log(process.env)

  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: `edward.plasencio@gmail.com`,
    },
  })

  let mailOptions = {
    from: data.email,
    to: `edward.plasencio@gmail.com`,
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
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
    } else {
      res.send('Success')
    }
  })

  smtpTransport.close()
})
