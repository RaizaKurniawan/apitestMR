const {
    axios, expect, assert, supertest, describe, baseURL, createURL,
} = require('../constants/constants-uat');

describe('Mythic Repository Get API 404 Response', async() => {
    it('Should not be able to get Confirm Mythic list 404', async() => {
        try {
            const res = await axios.get(createURL('confirmed/mythics'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
            
        } catch (error) {
            expect(error.response.status).to.equal(404);  
        }
    });
    it('Should not be able to get Unconfirm Mythic list 404', async() => {
        try {
            const res = await axios.get(createURL('unconfirmed/mythics'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404);
        }
       
    });
    it('Should not be able to get Mythic Detail 404 ', async() => {
        try { 
            const res = await axios.get(createURL('mythic/M-10011245'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404);
        }
    });

    it('Should not be able to get Confirm Casefile list 404', async() => {
        try {
            const res = await axios.get(createURL('confirmed/casefiles'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });
    it('Should not be able to get Unconfirm Casefile list 404', async() => {
        try {
            const res = await axios.get(createURL('unconfirmed/casefiles'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });
    it('Should not be able to get Casefile Detail 404', async() => {
        try {
            const res = await axios.get(createURL('casefile/C-10022342'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });

    it('Should not be able to get Confirm Dossier list 404 ', async() => {
        try {
            const res = await axios.get(createURL('confirmed/dossiers'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });
    it('Should not be able to get Unconfirm Dossier list 404', async() => {
        try {
            const res = await axios.get(createURL('unconfirmed/dossiers'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });
    it('Should not be able to get Dossier Detail 404', async() => {
        try {
            const res = await axios.get(createURL('dossier/D-100223432'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });

    
    it('Should not be able to get Confirm Addendum list 404', async() => {
        try {
            const res = await axios.get(createURL('confirmed/addendumss'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });
    it('Should not be able to get Unconfirm Addendum list 404', async() => {
        try {
            const res = await axios.get(createURL('uconfirmed/addendumss'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });
    it('Should not be able to get Addendum Detail ', async() => {
        try {
            const res = await axios.get(createURL('addendum/A-1001-232011-01'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });

    it('Home page Top Rated 404 ', async() => {
        try {
            const res = await axios.get(createURL('home/tops-rated'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });

    it('Home page Last Confirmed 404 ', async() => {
        try {
            const res = await axios.get(createURL('home/last-confirmedss'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('404');
        } catch (error) {
            expect(error.response.status).to.equal(404)
        }
    });

});