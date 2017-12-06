import {User} from './user';
import {Reactie} from './reactie';

export class Zoekertje {
    public _zoekertjeId: string;
    public name: string;
    public description: string;
    public price: Number;
    public location: string;
    public from: User;
    public pic: string;
    public comments: [Reactie];

    static fromJSON(json): Zoekertje {
        const rec = new Zoekertje(json.name, json.description, json.price, json.location, json.from, json.pic, json.comments);
        rec._zoekertjeId = json._id;
        return rec;
    }

    constructor(name: string, description: string, price: Number, location: string, from: User, pic: string, comments:[Reactie]) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.location = location;
        this.from = from;
        this.pic = pic;
        this.comments = comments;
    }

    toJSON() {
        return {
            name: this.name,
            description: this.description,
            price: this.price,
            location: this.location,
            from: this.from,
            pic: this.pic,
            comments: this.comments
        };
    }

}