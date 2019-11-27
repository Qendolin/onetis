
const Client = require('../client')
const otp = require('otplib/authenticator');
const fetch = require('node-fetch')


class UMClient extends Client {

    send(method, params) {
        return this._sendJRPC(method, params)
    }

    _sendJRPC(method, params) {
        const url = `${this.server}/WebUntis/jsonrpc_intern.do`
        return fetch(url, {
            body: JSON.stringify({
				id: this.jrpcId,
				method: method,
				params: [{
					auth: {
						clientTime: Date.now(),
						user: this.user.name,
						otp: this.currentOtp
					},
					...params
				}]
			})
        })
    }

    get currentOtp() {
        return otp.generate(this.secret);
    }
}