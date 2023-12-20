
const { expect, use } = require('chai');
const assert = chai.assert;
const supertest = require('supertest')
const { describe, it } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("devURI");
const createURL = (path) => `${baseURL}${path}`;

const api = supertest(createURL('unconfirmed/dossier'));

describe('API Response Test', async() => {
    it('Should have isConfirmed set to false', async() => {
        const res = await api.get();
        console.log(JSON.stringify(res.data.data, null, 2));
        const mythicData = res?.data?.mythic;
        console.log("Data:");

        // expect(res.data.page);
        assert.isFalse(response.body.isConfirmed, 'isConfirmed should be false');

        expect(res.status).to.equal(200);
    });
});




//const { snap } = snapshotMatcher;
// const expectedData = snapshotMatcher({

// })

        // expect(res.data).to.snapshotMatcher(snapshotMatcher({
        //     dossier: [
        //         {
        //             "code": "D-1001"
        //     }]
        // }));

                // expect(res.data.page).to.exist;