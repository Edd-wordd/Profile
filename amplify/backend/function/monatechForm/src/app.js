const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const nodemailer = require('nodemailer')

// Declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.post('/api/form', async function (req, res) {
  try {
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
          </ul
          <h3 style='font-size: 22px; margin: 30px 0 15px; color: #333;'>Message</h3>
          <p style='margin: 0;'>${data.message}</p>
        </div>
      `,
    }

    await smtpTransport.sendMail(mailOptions)

    smtpTransport.close()

    const response = {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
      headers: {
        'Access-Control-Allow-Origin': 'https://www.mona-tech.net', // Specify the allowed origin
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST', // Specify the allowed methods
      },
    }

    res.json(response)
  } catch (error) {
    console.log(error)

    const response = {
      statusCode: 500,
      body: JSON.stringify({ error: `Error: ${error}` }),
      headers: {
        'Access-Control-Allow-Origin': 'https://www.mona-tech.net', // Specify the allowed origin
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST', // Specify the allowed methods
      },
    }

    res.json(response)
  }
})

module.exports = app
