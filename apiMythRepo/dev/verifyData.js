const {
    chai, axios, expect, assert, supertest, describe, baseURL, createURL,
} = require('../constants/constants-dev');


// Deskripsi dari test case
describe('Ensure the data has match (Confirmed and Unconfirmed)', () => {
    it('Mythic Confirmed', async() => {
    const api = supertest(createURL('confirmed/mythic'));
    const response = await api.get('');

        response.body.data.mythic.forEach(myth => {
           console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + myth.code + " " + myth.isConfirmed);
            chai.expect(myth.isConfirmed).to.be.true;
        });
    });
    it('Mythic Unconfirmed', async() => {
    const api = supertest(createURL('unconfirmed/mythic'));
    const response = await api.get('');

        response.body.data.mythic.forEach(unmyth => {
           console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unmyth.code + " " + unmyth.isConfirmed);
            chai.expect(unmyth.isConfirmed).to.be.false;
        });
    });
    it('Casefile Confirmed', async() => {
        const api = supertest(createURL('confirmed/casefile'));
        const response = await api.get('');
    
            response.body.data.casefile.forEach(confcase => {
               console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + confcase.code + " " + confcase.isConfirmed);
                chai.expect(confcase.isConfirmed).to.be.true;
            });
    });
    it('Casefile Unconfirmed', async() => {
    const api = supertest(createURL('unconfirmed/casefile'));
    const response = await api.get('');

        response.body.data.casefile.forEach(unconcase => {
           console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unconcase.code + " " + unconcase.isConfirmed);
            chai.expect(unconcase.isConfirmed).to.be.false;
        });
    });
    it('Dossier Confirmed', async() => {
        const api = supertest(createURL('dossier'));
        const response = await api.get('');
    
            response.body.data.dossier.forEach(condos => {
               console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + condos.code + " " + condos.isConfirmed);
                chai.expect(condos.isConfirmed).to.be.true;
            });
    });

    // Dossier unconfirmed is not avaialable 

    it('Addendum Confirmed', async() => {
        const api = supertest(createURL('confirmed/addendum'));
        const response = await api.get('');
    
            response.body.data.addendum.forEach(conad => {
               console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + conad.code + " " + conad.isConfirmed);
                chai.expect(conad.isConfirmed).to.be.true;
            });
    });
    it('Addendum UnConfirmed', async() => {
        const api = supertest(createURL('unconfirmed/addendum'));
        const response = await api.get('');
    
            response.body.data.addendum.forEach(unconad => {
               console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unconad.code + " " + unconad.isConfirmed);
                chai.expect(unconad.isConfirmed).to.be.false;
            });
    });
    
});
