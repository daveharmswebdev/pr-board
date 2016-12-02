'use strict'

let bookshelf = require('../bookshelf')
const {hash} = require('bcrypt')

let Profile = bookshelf.Model.extend({
	tableName: 'profile',
	idAttribute: 'profile_id'
}, {
	formatProfile: model => {
		const heightString = model => {
			const height = parseInt(model.attributes.height)
			const feet = Math.floor(height/12)
			const inches = height-(feet*12)
			return `${feet}' ${inches}"`
		}
		const middleInitial = model => 
			model.attributes.middle_initial !== null ? `${model.attributes.middle_initial}. ` : ''
		const fullName = model => 
			`${model.attributes.first_name} ${middleInitial(model)}${model.attributes.last_name}`
		const profile = {
			profile_id: model.attributes.profile_id,
			user_name: model.attributes.user_name,
			full_name: fullName(model),
			height_string: heightString(model),
			weight: parseInt(model.attributes.weight),
			password: model.attributes.password
		}
		return profile		
	}
})

module.exports = Profile