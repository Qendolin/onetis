const userDataMapper = require('./userDataMapper')

module.exports = {
	login: userDataMapper.login,
	userConfig: userDataMapper.userConfig
}
