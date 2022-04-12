const express = require('express')
const app = express()
const config = require('config')
const { mongoose } = require('mongoose')

const PORT = config.get('serverPort')

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => console.log(`Server has been started ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}


start()