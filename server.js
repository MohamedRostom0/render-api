const express = require('express')

const app = express()

app.get('/:name', (req, res) => {
    res.json({name: `Hello ${req.params.name}`})
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
