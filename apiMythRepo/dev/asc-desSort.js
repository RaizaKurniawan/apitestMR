const axios = require('axios');
const { expect } = require('chai');
const { describe, it } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("devURI");

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
    let apiResConMythAsc; 
    beforeEach(async() => {
        apiResConMythAsc = await axios.get(createURL('confirmed/mythic?sortBy=2'));
    });
    it.only('Should be able to get Confirm Mythic list sorted by code ascending', async () => {
            const mythicData = apiResConMythAsc?.data?.mythic;
            console.log("Data:");
            console.log(apiResConMythAsc.data.data.mythic);
            expect(apiResConMythAsc.status).to.equal(200);
        });

    // Insert another Test Cases
    /*
    it('Another Test', () => {
            //console.log(apiResConMythAsc.data.data.mythic);
    });
    */

    let apiResConMythDesc; 
    beforeEach(async() => {
        apiResConMythDesc = await axios.get(createURL('confirmed/mythic?sortBy=3'));
    });
    it('Should be able to get Confirm Mythic list sorted by code descending', async () => {
            const mythicData = apiResConMythDesc?.data?.mythic;
            console.log("Data:");
            console.log(apiResConMythDesc.data.data.mythic);
            expect(apiResConMythDesc.status).to.equal(200);
        });
    
    // Insert another Test Cases
    /*
        it('Another test that uses the API response', () => {
        console.log(apiResConMythDesc.data.data.mythic);
    });
    */

    // Unconfirm Mythic file
    let apiResUnConMythAsc;
    beforeEach(async() => {
        apiResUnConMythAsc = await axios.get(createURL('unconfirmed/mythic?sortBy=2'));
    });
    it('Should be able to get Unconfirm Mythic list sorted by code ascending', async () => {
            const mythicData = apiResUnConMythAsc?.data?.mythic;
            console.log("Data:");
            console.log(apiResUnConMythAsc.data.data.mythic);
            expect(apiResUnConMythAsc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResUnConMythAsc.data.data.mythic);
    });

    let apiUnconMythDesc; 
    beforeEach(async() => {
        apiUnconMythDesc = await axios.get(createURL('unconfirmed/mythic?sortBy=3'));
    });
    it('Should be able to get Unconfirm Mythic list sorted by code descending', async () => {
            const mythicData = apiUnconMythDesc?.data?.mythic;
            console.log("Data:");
            console.log(apiUnconMythDesc.data.data.mythic);

            expect(apiUnconMythDesc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiUnconMythDesc.data.data.mythic);
    });
});

describe('Get Casefile List Sorted by Code Ascending and Descending', async () => {
    let apiResCaseAsc; 
    beforeEach(async() => {
        apiResCaseAsc = await axios.get(createURL('confirmed/casefile?sortBy=2'));
    });
    it('Should be able to get Confirm Casefile list sorted by code ascending', async () => {
            const mythicData = apiResCaseAsc?.data?.mythic;
            console.log("Data:");
            console.log(apiResCaseAsc.data.data.mythic);
            expect(apiResCaseAsc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResCaseAsc.data.data.mythic);
    });
    let apiResCaseDesc; 
    beforeEach(async() => {
        apiResCaseDesc = await axios.get(createURL('confirmed/casefile?sortBy=3'));
    });
    it('Should be able to get Confirm Casefile list sorted by code descending', async () => {
            const mythicData = apiResCaseDesc?.data?.mythic;
            console.log("Data:");
            console.log(apiResCaseDesc.data.data.mythic);
            expect(apiResCaseDesc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResCaseDesc.data.data.mythic);
    });

     // Unconfirm Casefile
     let apiResUnCaseAsc;
     beforeEach(async() => {
        apiResUnCaseAsc = await axios.get(createURL('unconfirmed/casefile?sortBy=2'));
    });
    it('Should be able to get Unconfirm Mythic list sorted by code ascending', async () => {
            const mythicData = apiResUnCaseAsc?.data?.mythic;
            console.log("Data:");
            console.log(apiResUnCaseAsc.data.data.mythic);
            expect(apiResUnCaseAsc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResUnCaseAsc.data.data.mythic);
    });
    let apiUnconMythDesc; 
    beforeEach(async() => {
        apiUnconMythDesc = await axios.get(createURL('unconfirmed/mythic?sortBy=3'));
    });
    it('Should be able to get Unconfirm Mythic list sorted by code descending', async () => {
            const mythicData = apiUnconMythDesc?.data?.mythic;
            console.log("Data:");
            console.log(apiUnconMythDesc.data.data.mythic);
            expect(apiUnconMythDesc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiUnconMythDesc.data.data.mythic);
    });

});


/*



describe('Get Dossier List Sorted by Code Ascending and Descending', async () => {
    let apiResDosAsc; 
    beforeEach(async() => {
        apiResDosAsc = await axios.get(createURL('confirmed/dossier?sortBy=2'));
    });
    it('Should be able to get Confirm Dossier list sorted by code ascending', async () => {
            const mythicData = apiResDosAsc?.data?.mythic;
            console.log("Data:");
            console.log(apiResDosAsc.data.data.mythic);
            expect(apiResDosAsc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResDosAsc.data.data.mythic);
    });
    let apiResDosDesc; 
    beforeEach(async() => {
        apiResDosDesc = await axios.get(createURL('confirmed/dossier?sortBy=3'));
    });
    it('Should be able to get Confirm Casefile list sorted by code descending', async () => {
            const mythicData = apiResDosDesc?.data?.mythic;
            console.log("Data:");
            console.log(apiResDosDesc.data.data.mythic);
            expect(apiResDosDesc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResDosDesc.data.data.mythic);
    });

     // Unconfirm dossier is not available
    

});

describe('Get Addendum List Sorted by Code Ascending and Descending', async () => {
    let apiResAddAsc; 
    beforeEach(async() => {
        apiResAddAsc = await axios.get(createURL('confirmed/addendum?sortBy=2'));
    });
    it('Should be able to get Confirm Casefile list sorted by code ascending', async () => {
            const mythicData = apiResAddAsc?.data?.mythic;
            console.log("Data:");
            console.log(apiResAddAsc.data.data.mythic);
            expect(apiResAddAsc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResAddAsc.data.data.mythic);
    });
    let apiResAddDesc; 
    beforeEach(async() => {
        apiResAddDesc = await axios.get(createURL('confirmed/addendum?sortBy=3'));
    });
    it('Should be able to get Confirm Casefile list sorted by code descending', async () => {
            const mythicData = apiResAddDesc?.data?.mythic;
            console.log("Data:");
            console.log(apiResAddDesc.data.data.mythic);
            expect(apiResAddDesc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResAddDesc.data.data.mythic);
    });

     // Unconfirm Addendum
     let apiResUnAddAsc;
     beforeEach(async() => {
        apiResUnAddAsc = await axios.get(createURL('unconfirmed/casefile?sortBy=2'));
    });
    it('Should be able to get Unconfirm Mythic list sorted by code ascending', async () => {
            const mythicData = apiResUnAddAsc?.data?.mythic;
            console.log("Data:");
            console.log(apiResUnAddAsc.data.data.mythic);
            expect(apiResUnAddAsc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResUnAddAsc.data.data.mythic);
    });
    let apiResUnAddDesc; 
    beforeEach(async() => {
        apiResUnAddDesc = await axios.get(createURL('unconfirmed/mythic?sortBy=3'));
    });
    it('Should be able to get Unconfirm Mythic list sorted by code descending', async () => {
            const mythicData = apiResUnAddDesc?.data?.mythic;
            console.log("Data:");
            console.log(apiResUnAddDesc.data.data.mythic);
            expect(apiResUnAddDesc.status).to.equal(200);
        });
    it('Another test that uses the API response', () => {
        console.log(apiResUnAddDesc.data.data.mythic);
    });

});



*/