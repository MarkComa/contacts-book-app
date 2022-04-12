const express = require('express')
const app = express()
const config = require('config')

const PORT = config.get('serverPort')

const start = () => {
    try {


        app.listen(PORT, () => console.log(`Server has been started ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}


start()