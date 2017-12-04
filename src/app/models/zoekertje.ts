import {User} from './user'

export class Zoekertje {
    private _zoekertjeId: string;
    private _name: string;
    private _description: string;
    private _price: Number;
    private _location: string;
    private _from: User;
    private _pic: string;

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