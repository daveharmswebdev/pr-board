'use strict'

module.exports.new = (req, res) => {
	res.json({"message":"new profile"})
}

module.exports.create = (req, res) => {
	res.send('the post was successful')
}