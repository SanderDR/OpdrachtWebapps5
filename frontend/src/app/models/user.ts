export class User {
    private _userid: string;
    private _name: string;
    private _username: string;
    private _email: string;
    private _password: string;

    static fromJSON(json): User {
        const rec = new User(json.name, json.username, json.email, json.password);
        rec._userid = json._id;
        return rec;
    }

    constructor(name: string, username: string, email: string, password: string) {
        this._name = name;
        this._username = username;
        this._email = email;
        this._password = password;
    }

    toJSON() {
        return {
            name: this._name,
            username: this._username,
            email: this._email,
            password: this._password
        };
    }

}