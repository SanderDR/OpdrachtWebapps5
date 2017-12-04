import {User} from './user'

export class Zoekertje {
    public _zoekertjeId: string;
    public _name: string;
    public _description: string;
    public _price: Number;
    public _location: string;
    public _from: User;
    public _pic: string;

    static fromJSON(json): Zoekertje {
        const rec = new Zoekertje(json.name, json.description, json.price, json.location, json.from, json.pic);
        rec._zoekertjeId = json._id;
        return rec;
    }

    constructor(name: string, description: string, price: Number, location: string, from: User, pic: string) {
        this._name = name;
        this._description = description;
        this._price = price;
        this._location = location;
        this._from = from;
        this._pic = pic;
    }

    toJSON() {
        return {
            name: this._name,
            description: this._description,
            price: this._price,
            location: this._location,
            from: this._from,
            pic: this._pic
        };
    }

}