const expect = require('chai').expect
const Client = require('../../src/client/client')

describe('client', () => {
	describe('login', () => {
		it('should do something', async (done) => {
			const client = new Client()
			let result = await client.login('spengergasse', 'myuser', 'mypass').catch(console.error)
			console.log(result)
			expect(result).to.be.an('object')
			done()
		})
	})
	describe('userConfig', () => {
		it('should do something', async (done) => {
			const client = new Client()
			let result = await client.userConfig().catch(console.error)
			console.log(result)
			expect(result).to.be.an('object')
			done()
		})
	})
})
