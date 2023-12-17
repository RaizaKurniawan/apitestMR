const axios = require('axios');
const { expect } = require('chai');
const { describe, it } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("uatURI");

const createURL = (path, queryParams) => {
    const url = new URL(`${baseURL}${path}`);
    if (queryParams) {
        Object.entries(queryParams).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }
    return url.toString();
};

describe('Get Mythic List Sorted by Code Ascending and Descending', async () => {
    let apiResponse; 
    beforeEach(async() => {
        apiResponse = await axios.get(createURL('confirmed/mythic?sortBy=2'));
    });
    it('Should be able to get Confirm Mythic list sorted by code ascending', async () => {
            const mythicData = apiResponse?.data?.mythic;
            console.log("datta:");
            console.log(apiResponse.data.data.mythic);
            expect(apiResponse.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResponse.data.data.mythic);
    });
    let apiResDesc; 
    beforeEach(async() => {
        apiResDesc = await axios.get(createURL('confirmed/mythic?sortBy=3'));
    });
    it('Should be able to get Confirm Mythic list sorted by code descending', async () => {
            const mythicData = apiResDesc?.data?.mythic;
            console.log("datta:");
            console.log(apiResDesc.data.data.mythic);

            expect(apiResDesc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResDesc.data.data.mythic);
    });
});

