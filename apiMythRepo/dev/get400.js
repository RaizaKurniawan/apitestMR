const axios = require('axios');
const { expect } = require('chai');
const { describe } = require('mocha');
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("config/env.properties");
const baseURL = properties.get("devURI");
const createURL = (path) => `${baseURL}${path}`;

describe('Bad Request to Get query SortBy Top Rated', async() => {
    
    it('Bad Request to Get Confirm Mythic Sorting List by Top Rated', async() => {
       try {
            const res = await axios.get(createURL('confirmed/mythic?sortBy=5'))
            console.log(res.data)
            expect(res.data.page);
            expect.fail('400');
       } catch (error) {
            expect(error.response.status).to.equal(400)    
       }   
    });

    it('Bad Request to Get Unconfirm Mythic Sorting List by Top Rated', async() => {
        try {
             const res = await axios.get(createURL('unconfirmed/mythic?sortBy=5'))
             console.log(res.data)
             expect(res.data.page);
             expect.fail('400');
        } catch (error) {
             expect(error.response.status).to.equal(400)    
        }   
     });

     it('Bad Request to Get Confirm Casefile Sorting List by Top Rated', async() => {
        try {
             const res = await axios.get(createURL('confirmed/casefile?sortBy=5'))
             console.log(res.data)
             expect(res.data.page);
             expect.fail('400');
        } catch (error) {
             expect(error.response.status).to.equal(400)    
        }   
     });
 
     it('Bad Request to Get Unconfirm Casefile Sorting List by Top Rated', async() => {
         try {
              const res = await axios.get(createURL('unconfirmed/casefile?sortBy=5'))
              console.log(res.data)
              expect(res.data.page);
              expect.fail('400');
         } catch (error) {
              expect(error.response.status).to.equal(400)    
         }   
     });

     it('Bad Request to Get Confirm Dossier Sorting List by Top Rated', async() => {
        try {
             const res = await axios.get(createURL('confirmed/dossier?sortBy=5'))
             console.log(res.data)
             expect(res.data.page);
             expect.fail('400');
        } catch (error) {
             expect(error.response.status).to.equal(400)    
        }   
     });
 
     it('Bad Request to Get Unconfirm Dossier Sorting List by Top Rated', async() => {
         try {
              const res = await axios.get(createURL('unconfirmed/dossier?sortBy=5'))
              console.log(res.data)
              expect(res.data.page);
              expect.fail('400');
         } catch (error) {
              expect(error.response.status).to.equal(400)    
         }   
     });

     it('Bad Request to Get Confirm Addendum Sorting List by Top Rated', async() => {
        try {
             const res = await axios.get(createURL('confirmed/addendum?sortBy=5'))
             console.log(res.data)
             expect(res.data.page);
             expect.fail('400');
        } catch (error) {
             expect(error.response.status).to.equal(400)    
        }   
     });
 
     it('Bad Request to Get Unconfirm Addendum Sorting List by Top Rated', async() => {
         try {
              const res = await axios.get(createURL('unconfirmed/addendum?sortBy=5'))
              console.log(res.data)
              expect(res.data.page);
              expect.fail('400');
         } catch (error) {
              expect(error.response.status).to.equal(400)    
         }   
     });

});