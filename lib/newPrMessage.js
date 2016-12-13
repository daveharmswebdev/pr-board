'use strict'

module.exports = post => {
	const weight = `${post.weight} pounds`
	const lift = post.lift_name.toLowerCase()
	const prDate = new Date(post.pr_date).toLocaleString()

	const message = {message:`new ${lift} pr of ${weight}, posted ${prDate}`}

	return message
}