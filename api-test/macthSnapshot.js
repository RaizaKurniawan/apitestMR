const axios = require('axios');
const { expect, use } = require('chai');
const snapshotMatcher = require('chai-snapshot-matcher');
const { describe, it } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("devURI");
const createURL = (path) => `${baseURL}${path}`;


const { snap } = snapshotMatcher;
// const expectedData = snapshotMatcher({

// })

describe('Test Assertion data', async() => {
    it('Loh', async() => {
        const res = await axios.get(createURL('unconfirmed/dossier'));
        console.log(res.data.data);
       
        const mythicData = res?.data?.mythic;
        console.log("Data:");
        // expect(res.data.page).to.exist;
        expect(res.data.page);
        expect(res.data).to.matchSnapshot(snap({
            dossier: [
                {
                    code: 'D-1001'
            }]
        }));
        expect(res.status).to.equal(200);
    });   
});



