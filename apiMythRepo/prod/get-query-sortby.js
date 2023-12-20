const axios = require('axios');
const { expect } = require('chai');
const { describe } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("prodURI")
const createURL = (path) => `${baseURL}${path}`;

describe('Get query SortBy Top Rated', async() => {
    
    it('Get Confirm Mythic Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('confirmed/mythic'), { sortBy: 'TOPRATED'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
    it('Get Unconfirm Mythic Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('unconfirmed/mythic'), { sortBy: 'TOPRATED'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Casefile Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('confirmed/casefile'), { sortBy: 'TOPRATED'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Casefile Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('unconfirmed/casefile'), { sortBy: 'TOPRATED'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Dossier Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('confirmed/dossier'), { sortBy: 'TOPRATED'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Dossier Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('unconfirmed/dossier'), { sortBy: 'TOPRATED'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Addendum Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('confirmed/addendum'), { sortBy: 'TOPRATED'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Addendum Sorting List by Top Rated', async() => {
        const res = await axios.get(createURL('unconfirmed/addendum'), { sortBy: 'TOPRATED'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
});

describe('Get query SortBy Lowest Code', async() => {
    
    it('Get Confirm Mythic Sorting List by Lowest Code', async() => {
        const res = await axios.get(createURL('confirmed/mythic'), { sortBy: 'LOWESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
    it('Get Unconfirm Mythic Sorting List by Lowest Code', async() => {
        const res = await axios.get(createURL('unconfirmed/mythic'), { sortBy: 'LOWESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Casefile Sorting List by Lowest Code', async() => {
        const res = await axios.get(createURL('confirmed/casefile'), { sortBy: 'LOWESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Casefile Sorting List by Lowest Code', async() => {
        const res = await axios.get(createURL('unconfirmed/casefile'), { sortBy: 'LOWESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Dossier Sorting List by Lowest Code', async() => {
        const res = await axios.get(createURL('confirmed/dossier'), { sortBy: 'LOWESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Dossier Sorting List by Lowest Code', async() => {
        const res = await axios.get(createURL('unconfirmed/dossier'), { sortBy: 'LOWESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Addendum Sorting List by Lowest Code', async() => {
        const res = await axios.get(createURL('confirmed/addendum'), { sortBy: 'LOWESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Addendum Sorting List by Lowest Code', async() => {
        const res = await axios.get(createURL('unconfirmed/addendum'), { sortBy: 'LOWESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
});

describe('Get query SortBy Highest Code', async() => {
    
    it('Get Confirm Mythic Sorting List by Highest Code', async() => {
        const res = await axios.get(createURL('confirmed/mythic'), { sortBy: 'HIGHESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
    it('Get Unconfirm Mythic Sorting List by Highest Code', async() => {
        const res = await axios.get(createURL('unconfirmed/mythic'), { sortBy: 'HIGHESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Casefile Sorting List by Highest Code', async() => {
        const res = await axios.get(createURL('confirmed/casefile'), { sortBy: 'HIGHESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Casefile Sorting List by Highest Code', async() => {
        const res = await axios.get(createURL('unconfirmed/casefile'), { sortBy: 'HIGHESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Dossier Sorting List by Highest Code', async() => {
        const res = await axios.get(createURL('confirmed/dossier'), { sortBy: 'HIGHESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Dossier Sorting List by Highest Code', async() => {
        const res = await axios.get(createURL('unconfirmed/dossier'), { sortBy: 'HIGHESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Addendum Sorting List by Highest Code', async() => {
        const res = await axios.get(createURL('confirmed/addendum'), { sortBy: 'HIGHESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Addendum Sorting List by Highest Code', async() => {
        const res = await axios.get(createURL('unconfirmed/addendum'), { sortBy: 'HIGHESTCODE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
});

describe('Get query SortBy Latest Submision Date', async() => {
    
    it('Get Confirm Mythic Sorting List by Latest Submision Date', async() => {
        const res = await axios.get(createURL('confirmed/mythic'), { sortBy: 'LATESSUBMISSIONDATE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
    it('Get Unconfirm Mythic Sorting List by Latest Submision Date', async() => {
        const res = await axios.get(createURL('unconfirmed/mythic'), { sortBy: 'LATESSUBMISSIONDATE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Casefile Sorting List by Latest Submision Date', async() => {
        const res = await axios.get(createURL('confirmed/casefile'), { sortBy: 'LATESSUBMISSIONDATE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Casefile Sorting List by Latest Submision Date', async() => {
        const res = await axios.get(createURL('unconfirmed/casefile'), { sortBy: 'LATESSUBMISSIONDATE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Dossier Sorting List by Latest Submision Date', async() => {
        const res = await axios.get(createURL('confirmed/dossier'), { sortBy: 'LATESSUBMISSIONDATE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Dossier Sorting List by Latest Submision Date', async() => {
        const res = await axios.get(createURL('unconfirmed/dossier'), { sortBy: 'LATESSUBMISSIONDATE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Confirm Addendum Sorting List by Latest Submision Date', async() => {
        const res = await axios.get(createURL('confirmed/addendum'), { sortBy: 'LATESSUBMISSIONDATE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });

    it('Get Unconfirm Addendum Sorting List by Latest Submision Date', async() => {
        const res = await axios.get(createURL('unconfirmed/addendum'), { sortBy: 'LATESSUBMISSIONDATE'})
        console.log(JSON.stringify(res.data.data, null, 2));
        expect(res.data.page);
        expect(res.status).to.equal(200);

    });
});