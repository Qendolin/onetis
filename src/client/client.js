
const {NotImplementedError} = require('../utils/errors')

class Client {

    schoolName
    serverUrl

    constructor(schoolName, serverUrl, userName) {
        this.schoolName = schoolName
        this.serverUrl = serverUrl
        this.user = {
            name: userName
        }
    }

    /**
     * @abstract
     * @param {*} request 
     */
    send(method, params) {
        throw new NotImplementedError();
    }

    get jrpcId() {
        return `onetis-${Date.now()}`
    }

}

module.exports = Client