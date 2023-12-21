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
           const matchingTitle = actualTitle.find(title => title.includes('1001'));
           assert.isOk(matchingTitle, 'Title containing "1001" should be found');
        } else {
            console.log('Actual Titles: ', actualTitle);
            assert.fail('Result is empty');
        }

    });

    it('Return empty when there is no result', async() => {
        try {
            const response = await axios.get(createURL('search?Keyword=Nonexistantkey'));
            assert.equal(response.status, 404);
            assert.isNull(response.data.data, 'Response should be empty');
    
        } catch (error){
            // Cek apakah error adalah error 404
            assert.equal(error.response.status, 404, 'Expected status code 404');
            // Cek juga apakah body dari respons adalah data yang kosong
            assert.isNull(error.response.data.data, 'Response should be empty');
        }
        });
});