import {User} from './user'

export class Reactie {
    public _reactieId: string;
    public _inhoud: string;
    public _when: string;
    public _by: User;

    static fromJSON(json): Reactie {
        const rec = new Reactie(json.inhoud, json.when, json.by);
        rec._reactieId = json._id;
        return rec;
    }

    constructor(inhoud: string, when: string, by: User) {
        this._inhoud = inhoud;
        this._when = when;
        this._by = by;
    }

    toJSON() {
        return {
            inhoud: this._inhoud,
            when: this._when,
            by: this._by
        };
    }

}