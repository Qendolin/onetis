const nodeFetch = require('node-fetch')
const fetch = require('fetch-cookie')(nodeFetch)

function makeUrlParams(obj) {
	return Object.keys(obj)
		.map((key) => {
			return `${key}=${obj[key]}`
		})
		.join('&')
}

class Client {
	constructor(url = null, mappers = {}) {
		this.url = url || 'https://neilo.webuntis.com/WebUntis'
		this.mappers = {
			...require('../mappers/'),
			...mappers
		}
	}

	async login(school, username, password) {
		return this.mappers.login(
			await fetch(`${this.url}/j_spring_security_check`, {
				method: 'POST',
				body: makeUrlParams({
					school: school,
					/* eslint-disable camelcase */
					j_username: username,
					j_password: password,
					/* eslint-enable camelcase */
					token: ''
				})
			})
		)
	}

	async userConfig() {
		return this.mappers.userConfig(await fetch(`${this.url}/api/app/config`))
	}
}

module.exports = Client
