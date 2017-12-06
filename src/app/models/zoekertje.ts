import {User} from './user';
import {Reactie} from './reactie';

export class Zoekertje {
    public _zoekertjeId: string;
    public _name: string;
    public _description: string;
    public _price: Number;
    public _location: string;
    public _from: User;
    public _pic: string;
    public _comments: [Reactie];

    static fromJSON(json): Zoekertje {
        const rec = new Zoekertje(json.name, json.description, json.price, json.location, json.from, json.pic, json.comments);
        rec._zoekertjeId = json._id;
        return rec;
    }

    constructor(name: string, description: string, price: Number, location: string, from: User, pic: string, comments:[Reactie]) {
        this._name = name;
        this._description = description;
        this._price = price;
        this._location = location;
        this._from = from;
        this._pic = pic;
        this._comments = comments;
    }

    toJSON() {
        return {
            name: this._name,
            description: this._description,
            price: this._price,
            location: this._location,
            from: this._from,
            pic: this._pic,
            comments: this._comments
        };
    }

}