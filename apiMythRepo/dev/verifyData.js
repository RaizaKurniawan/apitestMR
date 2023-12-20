const chai = require('chai');
const supertest = require('supertest');
const assert = chai.assert;
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("devURI");
const createURL = (path) => `${baseURL}${path}`;
// Import objek JSON yang ingin diuji



// Deskripsi dari test case
describe('JSON Matching Test', () => {
    it('Mythic Confirmed', async() => {
    const api = supertest(createURL('confirmed/mythic'));
    const response = await api.get('');

        response.body.data.mythic.forEach(element => {
            // console.log(element.isConfirmed);
            chai.expect(element.isConfirmed).to.be.true;
        });
    });
    it('Mythic Unconfirmed', async() => {
    const api = supertest(createURL('unconfirmed/mythic'));
    const response = await api.get('');

        response.body.data.mythic.forEach(unmyth => {
            console.log(unmyth.isConfirmed);
            chai.expect(unmyth.isConfirmed).to.be.false;
        });
    });
    it('Casefile Confirmed', async() => {
        const api = supertest(createURL('confirmed/casefile'));
        const response = await api.get('');
    
            response.body.data.casefile.forEach(confcase => {
                console.log(confcase.code + " " + confcase.isConfirmed);
                chai.expect(confcase.isConfirmed).to.be.true;
            });
    });
    it('Casefile Unconfirmed', async() => {
    const api = supertest(createURL('unconfirmed/casefile'));
    const response = await api.get('');

        response.body.data.casefile.forEach(unconcase => {
            console.log(unconcase.code + " " + unconcase.isConfirmed);
            chai.expect(unconcase.isConfirmed).to.be.false;
        });
    });
    it('Dossier Confirmed', async() => {
        const api = supertest(createURL('confirmed/dossier'));
        const response = await api.get('');
    
            response.body.data.dossier.forEach(condos => {
                console.log(condos.code + " " + condos.isConfirmed);
                chai.expect(condos.isConfirmed).to.be.true;
            });
    });

    // Dossier unconfirmed is not avaialable 
    // it('Dossier UnConfirmed', async() => {
    //     const api = supertest(createURL('unconfirmed/dossier'));
    //     const response = await api.get('');
    
    //         response.body.data.dossier.forEach(uncondos => {
    //             console.log(uncondos.code + " " + uncondos.isConfirmed);
    //             chai.expect(uncondos.isConfirmed).to.be.false;
    //         });
    // });

    it('Addendum Confirmed', async() => {
        const api = supertest(createURL('confirmed/addendum'));
        const response = await api.get('');
    
            response.body.data.addendum.forEach(conad => {
                console.log(conad.code + " " + conad.isConfirmed);
                chai.expect(conad.isConfirmed).to.be.true;
            });
    });
    it('Addendum UnConfirmed', async() => {
        const api = supertest(createURL('unconfirmed/addendum'));
        const response = await api.get('');
    
            response.body.data.addendum.forEach(unconad => {
                console.log(unconad.code + " " + unconad.isConfirmed);
                chai.expect(unconad.isConfirmed).to.be.false;
            });
    });
    
});
