const axios = require('axios');
const { expect } = require('chai');
const { describe } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("devURI");
const createURL = (path) => `${baseURL}${path}`;

describe('Ascending and Descending Mythic Files', async() => {
    it('Ascending in Confirmed Mythic Files', async() => {
        const conMythAsc = await axios.get(createURL('confirmed/mythic?sortBy=2'))
        console.log('Data from Mythic: ');
        const mythicData = conMythAsc?.data?.mythic;
        console.log(conMythAsc.data.data.mythic);
        expect(conMythAsc.status).to.equal(200);
    });
    it('Descending in Confirmed Mythic Files', async() => {
        const conMythDesc = await axios.get(createURL('confirmed/mythic?sortBy=3'))
        console.log('Data from Mythic: ');
        const mythicData = conMythDesc?.data?.mythic;
        console.log(conMythDesc.data.data.mythic);
        expect(conMythDesc.status).to.equal(200);
    });

    // Unconfirm Mythic Files
    it('Ascending in Unconfirmed Mythic Files', async() => {
        const unconMythAsc = await axios.get(createURL('unconfirmed/mythic?sortBy=2'))
        console.log('Data from Mythic: ');
        const mythicData = unconMythAsc?.data?.mythic;
        console.log(unconMythAsc.data.data.mythic);
        expect(unconMythAsc.status).to.equal(200);
    });
    it('Descending in Confirmed Mythic Files', async() => {
        const unconMythDesc = await axios.get(createURL('unconfirmed/mythic?sortBy=3'))
        console.log('Data from Mythic: ');
        const mythicData = unconMythDesc?.data?.mythic;
        console.log(unconMythDesc.data.data.mythic);
        expect(unconMythDesc.status).to.equal(200);
    });
});


describe('Ascending and Descending Casefiles', async() => {
    it('Ascending in Confirmed Casefiles', async() => {
        const conCasfAsc = await axios.get(createURL('confirmed/casefile?sortBy=2'))
        console.log('Data from Casefile: ');
        const casefileData = conCasfAsc?.data?.casefile;
        console.log(conCasfAsc.data.data.casefile);
        expect(conCasfAsc.status).to.equal(200);
    });
    it('Descending in Confirmed Mythic Files', async() => {
        const conCasfDesc = await axios.get(createURL('confirmed/casefile?sortBy=3'))
        console.log('Data from Casefile: ');
        const casefileData = conCasfDesc?.data?.casefile;
        console.log(conCasfDesc.data.data.casefile);
        expect(conCasfDesc.status).to.equal(200);
    });

    // Unconfirm Casefile Files
    it('Ascending in Unconfirmed Casefile', async() => {
        const unconCaseAsc = await axios.get(createURL('unconfirmed/casefile?sortBy=2'))
        console.log('Data from Casefile: ');
        const casefileData = unconCaseAsc?.data?.casefile;
        console.log(unconCaseAsc.data.data.casefile);
        expect(unconCaseAsc.status).to.equal(200);
    });
    it('Descending in Confirmed Casefile', async() => {
        const unconCaseDesc = await axios.get(createURL('unconfirmed/casefile?sortBy=3'))
        console.log('Data from Casefile: ');
        const mythicData = unconCaseDesc?.data?.casefile;
        console.log(unconCaseDesc.data.data.casefile);
        expect(unconCaseDesc.status).to.equal(200);
    });
});