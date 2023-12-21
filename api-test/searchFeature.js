const axios = require('axios');
const { expect, assert } = require('chai');
var PropertiesReader = require('properties-reader');
const { search } = require('superagent');
var properties = PropertiesReader('config/env.properties');
const baseURL = properties.get('devURI');
const createURL = (path) => `${baseURL}${path}`;

describe('Search feature Test', async() => {
    it('Should get result match response', async() => {
        const response = await axios.get(createURL('search?Keyword=1001'));
        assert.equal(response.status, 200);

        const result = search('1001', response.data.data);
        console.log('Response Data:', response.data.data);
        console.log('Search Result:', result);
        console.log('Actual Titles: ', response.data.data.map(item => item.title));
        const actualTitle = response.data.data.map(item => item.title);

        if (actualTitle.length > 0) {
           const matchingTitle = actualTitle.find(item => item.title.includes('1001'));
           assert.isOk(matchingTitle, 'Title containing "1001" should be found');
        } else {
            //console.log('Actual Titles: ', response.data.data.map(item => item.title));
            assert.fail('Result is empty');
        }

    });

    it('Return empty when there is no result', async() => {
        const response = await axios.get(createURL('search?Keyword=Nonexistantkey'));
        assert.equal(response.status, 404);
        assert.isEmpty(response.data.data, 'Response should be empty');
    });
});