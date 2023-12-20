const axios = require('axios');
const { expect } = require('chai');
const { describe } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("stagURI");
const createURL = (path) => `${baseURL}${path}`;

describe('Mythic Repository Get API request', async() => {
    it('Should be able to get Confirm Mythic list ', async() => {
        const res = await axios.get(createURL('confirmed/mythic'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Should be able to get Unconfirm Mythic list ', async() => {
        const res = await axios.get(createURL('unconfirmed/mythic'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });
    
    it('Should be able to get Mythic Detail ', async() => {
        const res = await axios.get(createURL('mythic/M-1001'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });

    it('Should be able to get Confirm Casefile list ', async() => {
        const res = await axios.get(createURL('confirmed/casefile'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });
    it('Should be able to get Unconfirm Casefile list ', async() => {
        const res = await axios.get(createURL('unconfirmed/casefile'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });
    it('Should be able to get Casefile Detail ', async() => {
        const res = await axios.get(createURL('casefile/C-1002'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });

    it('Should be able to get Confirm Dossier list ', async() => {
        const res = await axios.get(createURL('confirmed/dossier'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });
    it('Should be able to get Unconfirm Dossier list ', async() => {
        const res = await axios.get(createURL('unconfirmed/dossier'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });
    it('Should be able to get Dossier Detail ', async() => {
        const res = await axios.get(createURL('dossier/D-1002'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });

    
    it('Should be able to get Confirm Addendum list ', async() => {
        const res = await axios.get(createURL('confirmed/addendum'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });
    it('Should be able to get Unconfirm Addendum list ', async() => {
        const res = await axios.get(createURL('unconfirmed/addendum'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });
    it('Should be able to get Addendum Detail ', async() => {
        const res = await axios.get(createURL('addendum/C-1001-A1431'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);
    });

    it('Home page Top Rated', async () => {
        const res = await axios.get(createURL('home/top-rated'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page)
        expect(res.status).to.equal(200)
    });

    it('Home page Last Confirmed', async () => {
        const res = await axios.get(createURL('home/last-confirmed'))
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page)
        expect(res.status).to.equal(200)
    });
});


