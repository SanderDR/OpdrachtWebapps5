let Request = require('request');

//we testen enkel gets in begin status van db want we kunnen geen lokale db gebruiken.
//we gebruiken dotenv om envs op te slaan en we kunnen dus niet kiezen welke
//env we gebruiken dus we werken altijd met link van db.
describe("Server",()=>{
    let server;
    beforeAll(() => {
    server = require('../app');
    });
    afterAll(() => {
    });
    describe("GET /API/zoekertjes", () => {
        let data = {};
        // add a new zoekertje to our database
        beforeAll((done) => {
            Request(
                { method: 'GET'
                , uri: 'http://localhost:3000/API/zoekertjes'
                , json: true
                }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            })
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            //momenteel 2 zoekertjes in db
            expect(data.body.length).toBe(2);
            //haal eerste zoekertje op
            let zoekertje = data.body[0];
            //controle naam
            expect(zoekertje.name).toBe("Oude ps3");
            //controle aantal reactie's
            expect(zoekertje.comments.length).toBe(2);
        });
    });

    describe("GET /API/zoekertje/id", () => {
        var data = {};
        beforeAll((done) => {
            Request(
                { method: 'GET'
                , uri: 'http://localhost:3000/API/zoekertje/5a27d47d04cc4d12341c9726'
                , json: true
                }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            })
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.name).toBe("Oude ps3");
            expect(data.body.comments.length).toBe(2);
        });
    });

    describe("Post /API/users/checkusername", () => {
        var data = {};
        beforeAll((done) => {
            Request(
                { method: 'Post'
                , uri: 'http://localhost:3000/API/users/checkusername'
                , json: true,
                body:{username:"SanderDR"}
                }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            })
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.username).toBe("alreadyexists");
        });
    });
});