const express = require('express')

const app = express()

//app.use("viewengine", "ejs")

app.get('/', (req, res) => {
    res.send("TESTE")
})

app.listen(8080, () => {
    console.log("Server running...")
})