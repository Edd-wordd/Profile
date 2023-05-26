// /*
// Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
//     http://aws.amazon.com/apache2.0/
// or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and limitations under the License.
// */
//
//
// /* Amplify Params - DO NOT EDIT
// 	ENV
// 	REGION
// 	REACT_APP_COMPANY_USER_EMAIL
// 	REACT_APP_COMPANY_EMAIL_PASSWORD
// 	REACT_APP_COMPANY_RECIPIENT_EMAIL
// Amplify Params - DO NOT EDIT */
//
// const express = require('express')
// const bodyParser = require('body-parser')
// const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
//
// // declare a new express app
// const app = express()
// app.use(bodyParser.json())
// app.use(awsServerlessExpressMiddleware.eventContext())
//
// // Enable CORS for all methods
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "*")
//   next()
// });
//
//
// /**********************
//  * Example get method *
//  **********************/
//
// app.get('/api/form', function(req, res) {
//   // Add your code here
//   res.json({success: 'get call succeed!', url: req.url});
// });
//
// app.get('/api/form/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'get call succeed!', url: req.url});
// });
//
// /****************************
// * Example post method *
// ****************************/
//
// app.post('/api/form', function(req, res) {
//   // Add your code here
//   res.json({success: 'post call succeed!', url: req.url, body: req.body})
// });
//
// app.post('/api/form/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'post call succeed!', url: req.url, body: req.body})
// });
//
// /****************************
// * Example put method *
// ****************************/
//
// app.put('/api/form', function(req, res) {
//   // Add your code here
//   res.json({success: 'put call succeed!', url: req.url, body: req.body})
// });
//
// app.put('/api/form/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'put call succeed!', url: req.url, body: req.body})
// });
//
// /****************************
// * Example delete method *
// ****************************/
//
// app.delete('/api/form', function(req, res) {
//   // Add your code here
//   res.json({success: 'delete call succeed!', url: req.url});
// });
//
// app.delete('/api/form/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'delete call succeed!', url: req.url});
// });
//
// app.listen(3000, function() {
//     console.log("App started")
// });
//
// // Export the app object. When executing the application local this does nothing. However,
// // to port it to AWS Lambda we will create a wrapper around that will load the app from
// // this file
// module.exports = app

/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	REACT_APP_COMPANY_USER_EMAIL
	REACT_APP_COMPANY_EMAIL_PASSWORD
	REACT_APP_COMPANY_RECIPIENT_EMAIL
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const nodemailer = require('nodemailer')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

/**********************
 * Example get method *
 **********************/

app.get('/api/form', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url })
})

app.get('/api/form/*', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url })
})

/****************************
 * Example post method *
 ****************************/

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
      //...Rest of the code
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

app.post('/api/form/*', async function (req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body })
})

/****************************
 * Example put method *
 ****************************/

app.put('/api/form', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body })
})

app.put('/api/form/*', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body })
})

/****************************
 * Example delete method *
 ****************************/

app.delete('/api/form', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url })
})

app.delete('/api/form/*', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url })
})

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
