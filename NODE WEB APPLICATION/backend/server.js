const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get('/api/message', (_request, response) => {
  response.json({
    message: 'Hello from the Express backend.',
    course: 'Node.js Web Application with React frontend',
    task: 'Hands-On Activity: Building a Node Web Application',
    timestamp: new Date().toLocaleString(),
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
