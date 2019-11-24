const user = require('../model/user')

function login(raw) {
	raw = JSON.parse(raw)
	const out = new user.LoginResponse()
	out.successful = raw.state === 'SUCCESS'
	return out
}

function userConfig(raw) {
	raw = JSON.parse(raw)
	return Object.assign(new user.UserConfig(), raw)
}

module.exports = {
	login,
	userConfig
}
