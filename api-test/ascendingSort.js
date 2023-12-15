const axios = require('axios');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const baseURL = 'https://repository-xyz-api-dev.test.mythicprotocol.net/';
const createURL = (path, queryParams) => {
    const url = new URL(`${baseURL}${path}`);
    if (queryParams) {
        Object.entries(queryParams).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }
    return url.toString();
};

describe('Get Mythic List Sorted by Code Ascending', async () => {
    let apiResponse; 
    beforeEach(async() => {
        apiResponse = await axios.get(createURL('confirmed/mythic?sortBy=2'));
    });
    it('Should be able to get Confirm Mythic list sorted by code ascending', async () => {
        
            //const res = await axios.get(createURL('confirmed/mythic?sortBy=2'));
            const mythicData = apiResponse?.data?.mythic;
            console.log("datta:");
            console.log(apiResponse.data.data.mythic);

            expect(apiResponse.status).to.equal(200);
            // Ensure that the response status is 200
            //expect(res.status).to.equal(200);

            // Add additional assertions if needed
            //expect(res.data).to.have.property('mythic').that.is.an('array');
            // expect(res.data.page).to.exist;
            
            // Add assertions to check if the codes are sorted in ascending order
            const codes = apiResponse.data.data.mythic.map(item => item.code);
            for (let i = 1; i < codes.length; i++) {
                expect(codes[i - 1] <= codes[i]).to.be.true;
            }
        });
    it('Another test that uses the API response', () => {
        console.log(apiResponse.data.data.mythic);
    });
});
