const axios = require('axios');
const { expect, use } = require('chai');
const chaiJestSnapshot = require('chai-jest-snapshot');
const { describe, it } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("devURI");
const createURL = (path) => `${baseURL}${path}`;

use(chaiJestSnapshot);

describe('Test Assertion data', async() => {
    it('Assertion data Test', async() => {
        const res = await axios.get(createURL('unconfirmed/dossier'));
        console.log(JSON.stringify(res.data.data, null, 2));
        const mythicData = res?.data?.mythic;
        console.log("Data:");

        expect(res.data.page);

        expect(res.data).to.matchSnapshot();
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