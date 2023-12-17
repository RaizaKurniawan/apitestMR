const axios = require('axios');
const { expect } = require('chai');
const { describe } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("devURI")
const createURL = (path) => `${baseURL}${path}`;

describe('Get query SortBy Top Rated', async() => {
    
    it('Get Confirm Mythic Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('confirmed/mythic'), { sortBy: 'TOPRATED'})
        console.log(res.data)
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
    it('Get Unconfirm Mythic Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('unconfirmed/mythic'), { sortBy: 'TOPRATED'})
        console.log(res.data)
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Casefile Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('confirmed/casefile'), { sortBy: 'TOPRATED'})
        console.log(res.data)
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Casefile Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('unconfirmed/casefile'), { sortBy: 'TOPRATED'})
        console.log(res.data)
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Dossier Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('confirmed/dossier'), { sortBy: 'TOPRATED'})
        console.log(res.data)
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Dossier Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('unconfirmed/dossier'), { sortBy: 'TOPRATED'})
        console.log(res.data)
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Addendum Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('confirmed/addendum'), { sortBy: 'TOPRATED'})
        console.log(res.data)
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Addendum Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('unconfirmed/addendum'), { sortBy: 'TOPRATED'})
        console.log(res.data)
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
});
