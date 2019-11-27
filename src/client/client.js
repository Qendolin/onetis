
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
     */
    send(method, params) {
        throw new NotImplementedError();
    }

    get jrpcId() {
        return `onetis-${Date.now()}-${Math.random()*10**6 | 0}`
    }

}

module.exports = Client