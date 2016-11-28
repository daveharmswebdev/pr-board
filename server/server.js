'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.json({"message":"hello world"})
})

app.listen(PORT, () => {
	console.log('now listening on port', PORT)
})

module.exports = app

