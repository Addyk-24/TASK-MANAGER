const express = require('express')
const routes = require('./Routes/routes')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()

const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/errorhandle')

const port = process.env.PORT || 3000


// Middleware
app.use(express.static('./public'))




// routes
app.use('/api/v1/tasks',routes)
app.use(notFound)
app.use(errorHandler)



const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log(error);
    
  }
}

start()





