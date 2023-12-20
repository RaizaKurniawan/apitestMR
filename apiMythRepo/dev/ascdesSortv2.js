const axios = require('axios');
const { expect } = require('chai');
const { describe } = require('mocha');
var PropertiesReader = require("properties-reader");
const supertest = require('supertest');
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("devURI");
const createURL = (path) => `${baseURL}${path}`;

describe('Ascending and Descending Mythic Files', async() => {
    // Confirmed Mythic Files
    it('Ascending in Confirmed Mythic Files', async() => {
        const conMythAsc = await axios.get(createURL('confirmed/mythic?sortBy=2'))
        console.log('Data from Mythic: ');
        const mythicData = conMythAsc?.data?.mythic;
        console.log(conMythAsc.data.data.mythic);
        expect(conMythAsc.status).to.equal(200);

        /* Verify, ensure that the Data is confirmed, isConfirmed: true*/
        const conMythAscs = supertest(createURL('confirmed/mythic?sortBy=2'));
        const responses = await conMythAscs.get(''); 
        responses.body.data.mythic.forEach(conMythAscs => {
            console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + conMythAscs.code + " " + conMythAscs.isConfirmed);
            expect(conMythAscs.isConfirmed).to.be.true;
        });
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

         /* Verify, ensure that the Data is Unconfirmed, isConfirmed: false*/
         const unconMythAscs = supertest(createURL('unconfirmed/mythic?sortBy=2'));
         const responses = await unconMythAscs.get(''); 
         responses.body.data.mythic.forEach(unconMythAscs => {
             console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unconMythAscs.code + " " + unconMythAscs.isConfirmed);
             expect(unconMythAscs.isConfirmed).to.be.false;
         });
    });
    it('Descending in Unconfirmed Mythic Files', async() => {
        const unconMythDesc = await axios.get(createURL('unconfirmed/mythic?sortBy=3'))
        console.log('Data from Mythic: ');
        const mythicData = unconMythDesc?.data?.mythic;
        console.log(unconMythDesc.data.data.mythic);
        expect(unconMythDesc.status).to.equal(200);
    });
});


describe('Ascending and Descending Casefiles', async() => {
    // Confirmed Casefile
    it('Ascending in Confirmed Casefiles', async() => {
        const conCasfAsc = await axios.get(createURL('confirmed/casefile?sortBy=2'))
        console.log('Data from Casefile: ');
        const casefileData = conCasfAsc?.data?.casefile;
        console.log(conCasfAsc.data.data.casefile);
        expect(conCasfAsc.status).to.equal(200);
        /* Verify, ensure that the Data is confirmed, isConfirmed: true*/
        const conCasfAscs = supertest(createURL('confirmed/casefile?sortBy=2'));
        const responses = await conCasfAscs.get(''); 
        responses.body.data.casefile.forEach(conCasfAscs => {
            console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + conCasfAscs.code + " " + conCasfAscs.isConfirmed);
            expect(conCasfAscs.isConfirmed).to.be.true;
        });
    });
    it('Descending in Confirmed Casefile', async() => {
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
        /* Verify, ensure that the Data is Unconfirmed, isConfirmed: false*/
        const unconCaseAscs = supertest(createURL('unconfirmed/casefile?sortBy=2'));
        const responses = await unconCaseAscs.get(''); 
        responses.body.data.casefile.forEach(unconCaseAscs => {
            console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unconCaseAscs.code + " " + unconCaseAscs.isConfirmed);
            expect(unconCaseAscs.isConfirmed).to.be.false;
        });
    });
    it('Descending in unconfirmed Casefile', async() => {
        const unconCaseDesc = await axios.get(createURL('unconfirmed/casefile?sortBy=3'))
        console.log('Data from Casefile: ');
        const mythicData = unconCaseDesc?.data?.casefile;
        console.log(unconCaseDesc.data.data.casefile);
        expect(unconCaseDesc.status).to.equal(200);
       
    });
});


describe('Ascending and Descending Dossier', async() => {
    // Confirm Dossier
    it('Ascending in Confirmed Dossier', async() => {
        const conDosAsc = await axios.get(createURL('confirmed/dossier?sortBy=2'))
        console.log('Data from Dossier: ');
        const dossierData = conDosAsc?.data?.dossier;
        console.log(conDosAsc.data.data.dossier);
        expect(conDosAsc.status).to.equal(200);
        /* Verify, ensure that the Data is confirmed, isConfirmed: true*/
        const conDosAscs = supertest(createURL('confirmed/dossier?sortBy=2'));
        const responses = await conDosAscs.get(''); 
        responses.body.data.dossier.forEach(conDosAscs => {
            console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + conDosAscs.code + " " + conDosAscs.isConfirmed);
            expect(conDosAscs.isConfirmed).to.be.true;
        });
    });
    it('Descending in Confirmed Dossier', async() => {
        const conDosDesc = await axios.get(createURL('confirmed/dossier?sortBy=3'))
        console.log('Data from Casefile: ');
        const dossierData = conDosDesc?.data?.dossier;
        console.log(conDosDesc.data.data.dossier);
        expect(conDosDesc.status).to.equal(200);
    });

    // Unconfirm Dossier is not available
    // it('Ascending in Unconfirmed Casefile', async() => {
    //     const unconCaseAsc = await axios.get(createURL('unconfirmed/casefile?sortBy=2'))
    //     console.log('Data from Casefile: ');
    //     const casefileData = unconCaseAsc?.data?.casefile;
    //     console.log(unconCaseAsc.data.data.casefile);
    //     expect(unconCaseAsc.status).to.equal(200);
    //     /* Verify, ensure that the Data is Unconfirmed, isConfirmed: false*/
    //     const unconCaseAscs = supertest(createURL('unconfirmed/mythic?sortBy=2'));
    //     const responses = await unconCaseAscs.get(''); 
    //     responses.body.data.mythic.forEach(unconCaseAscs => {
    //         console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + unconCaseAscs.code + " " + unconCaseAscs.isConfirmed);
    //         expect(unconCaseAscs.isConfirmed).to.be.true;
    //     });
    // });
    // it('Descending in unconfirmed Casefile', async() => {
    //     const unconCaseDesc = await axios.get(createURL('unconfirmed/casefile?sortBy=3'))
    //     console.log('Data from Casefile: ');
    //     const mythicData = unconCaseDesc?.data?.casefile;
    //     console.log(unconCaseDesc.data.data.casefile);
    //     expect(unconCaseDesc.status).to.equal(200);


    //     /* Verify, ensure that the Data is Unconfirmed, isConfirmed: false*/
    //     const unconCaseDescs = supertest(createURL('unconfirmed/casefile?sortBy=3'));
    //     const responses = await unconCaseDescs.get(''); 
    //     responses.body.data.casefile.forEach(unconCaseDesc => {
    //         console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unconCaseDesc.code + " " + unconCaseDesc.isConfirmed);
    //         expect(unconCaseDesc.isConfirmed).to.be.false;
    //     });
    // });



});

describe('Ascending and Descending Addendum', async() => {
    // Confirmed Addendum
    it('Ascending in Confirmed Addendum', async() => {
        const conAddAsc = await axios.get(createURL('confirmed/addendum?sortBy=2'))
        console.log('Data from Addendum: ');
        const addendumData = conAddAsc?.data?.addendum;
        console.log(conAddAsc.data.data.addendum);
        expect(conAddAsc.status).to.equal(200);
        /* Verify, ensure that the Data is confirmed, isConfirmed: true*/
        const conAddAscs = supertest(createURL('confirmed/addendum?sortBy=2'));
        const responses = await conAddAscs.get(''); 
        responses.body.data.addendum.forEach(conAddAscs => {
            console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + conAddAscs.code + " " + conAddAscs.isConfirmed);
            expect(conAddAscs.isConfirmed).to.be.true;
        });
    });
    it('Descending in Confirmed Addendum', async() => {
        const conAddDesc = await axios.get(createURL('confirmed/addendum?sortBy=3'))
        console.log('Data from Addendum: ');
        const addendumeData = conAddDesc?.data?.addendum;
        console.log(conAddDesc.data.data.addendum);
        expect(conAddDesc.status).to.equal(200);
    });

    // Unconfirm Addendum Files
    it('Ascending in Unconfirmed Addendum', async() => {
        const unconAddAsc = await axios.get(createURL('unconfirmed/addendum?sortBy=2'))
        console.log('Data from Addendum: ');
        const addendumData = unconAddAsc?.data?.addendum;
        console.log(unconAddAsc.data.data.addendum);
        expect(unconAddAsc.status).to.equal(200);
        /* Verify, ensure that the Data is Unconfirmed, isConfirmed: false*/
        const unconAddAscs = supertest(createURL('unconfirmed/addendum?sortBy=2'));
        const responses = await unconAddAscs.get(''); 
        responses.body.data.addendum.forEach(unconAddAscs => {
            console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unconAddAscs.code + " " + unconAddAscs.isConfirmed);
            expect(unconAddAscs.isConfirmed).to.be.false;
        });
    });
    it('Descending in unconfirmed Addendum', async() => {
        const unconAddDesc = await axios.get(createURL('unconfirmed/addendum?sortBy=3'))
        console.log('Data from Addendum: ');
        const addendumData = unconAddDesc?.data?.addendum;
        console.log(unconAddDesc.data.data.addendum);
        expect(unconAddDesc.status).to.equal(200);
       
    });
});

//console.log('Verify, ensure that the Data is Unconfirmed, isConfirmed: false');