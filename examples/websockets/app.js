const express = require('express')
const logger = require('morgan')
const enableWs = require('express-ws')

const app = express()
app.use(logger('common'))

enableWs(app)

const replies = [
  "I'm glad we hit it off well!",
  "Would you like a cup of coffee?",
  "That's interesting to hear.",
  "Nice to meet you!",
  "Have a good day!"
]

app.ws('/chat', (ws, req) => {
  ws.on('message', (msg) => {
    console.log(msg)
    setTimeout(() => {
      const reply = replies[Math.floor(Math.random() * replies.length)]
      ws.send(reply)
    }, 200)
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})