const Classes = {
	get: () => {
		let path = 'api/public/officehours/classes'
		return WebUntis.send(path)
	}
}
