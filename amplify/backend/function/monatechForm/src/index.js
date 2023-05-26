import awsServerlessExpress from 'aws-serverless-express'
import app from '../app.js' // Adjust the file path based on your directory structure

const server = awsServerlessExpress.createServer(app)

export const handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  awsServerlessExpress.proxy(server, event, context)
}
