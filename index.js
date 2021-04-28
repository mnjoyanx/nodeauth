const express = require('express')
const app = express()

const db = require('./config/db')
app.use(express.json())


// routes
const registerRouter = require('./routes/auth')
app.use('/api/v1/auth', registerRouter)

async function start() {
    try {
        await db.authenticate()
        app.listen(5000, () => console.log('server is running on port 5000'))
    } catch (err) {
        console.log(err)
    }
}

start() 