const axios = require('axios');
const { expect } = require('chai');

describe(" Get API request", async() => {
    it('Should be able to get user list', async () => {
        const res = await axios.get('https://reqres.in/api/users?page=2')
        console.log(res.data)
    });
})