class accessToken {
    token : string;
    expiration : string;
}

export class LoginInfo {
    username: string;
    name: string;
    surname: string;
    accessToken: accessToken;
    constructor() {
        this.accessToken = new accessToken()
    }
}

