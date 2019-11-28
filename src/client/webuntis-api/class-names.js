const ClassNames = {
	get: () => {
		let path = 'api/public/officehours/classes'
		return webuntis.sendsend(path)
	}
}

module.exports = ClassNames;