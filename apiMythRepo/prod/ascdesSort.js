const {
    axios, expect, assert, supertest, describe, baseURL, createURL,
} = require('../constants/constants-prod');

describe('Ascending and Descending Mythic Files', async() => {
    // Confirmed Mythic Files
    it('Verify that the data is Confirmed in Mythic', async() => {
        /* Verify, ensure that the Data is confirmed, isConfirmed: true*/
        const conMythAscs = supertest(createURL('confirmed/mythic?sortBy=3'));
        const responses = await conMythAscs.get(''); 
        responses.body.data.mythic.forEach(conMythAscs => {
            console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + conMythAscs.code + " " + conMythAscs.isConfirmed);
            expect(conMythAscs.isConfirmed).to.be.true;
        });
    });
    it('Verify that the data is Ascending in Mythic', async() => {
       const conMythAsc = await axios.get(createURL('confirmed/mythic?sortBy=3'));
        assert.equal(conMythAsc.status, 200);
        assert.exists(conMythAsc.data);

        const data = conMythAsc.data;

        // Check urutan Ascending berdasarkan "code" Mythic
        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;
            assert.isTrue(compareCodeAscending(currentCode, nextCode), 'Data tidak dalam urutan Ascending');
        }

        //Fungsi untuk membandingkan dua kode apakah sudah Ascending atau belum
        function compareCodeAscending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);
            
            // Cek kode pertama lebih kecil dari kode kedua
            return codeNumber1 < codeNumber2;
        }
    });
    it('Verify the data is Descending in Confirmed Mythic Files', async() => {
        const conMythDesc = await axios.get(createURL('confirmed/mythic?sortBy=2'))
        assert.equal(conMythDesc.status, 200);
        assert.exists(conMythDesc.data);
        const data = conMythDesc.data;
        
        //Check urutan Descending berdasarkan code Mythic
        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeDescending(currentCode, nextCode), 'Data tidak dalam urutan Descending')
        }
        
        // Fungsi untuk membandingkan dua kode apakah sudah Descending atau belum
        function compareCodeDescending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);

            // Cek apakah kode pertama lebih besar dari kode kedua
            return codeNumber1 > codeNumber2;
        }
    });

    // Unconfirm Mythic Files
    it('Ensure the data is Unconfirmed Mythic', async() => {
         /* Verify, ensure that the Data is Unconfirmed, isConfirmed: false*/
         const unconMythAscs = supertest(createURL('unconfirmed/mythic?sortBy=3'));
         const responses = await unconMythAscs.get(''); 
         responses.body.data.mythic.forEach(unconMythAscs => {
             console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unconMythAscs.code + " " + unconMythAscs.isConfirmed);
             expect(unconMythAscs.isConfirmed).to.be.false;
         });
    });
    it('Verify the data is Ascending in Unconfirmed Mythic', async() => {
        const unconMythAsc = await axios.get(createURL('unconfirmed/mythic?sortBy=3'));
        assert.equal(unconMythAsc.status, 200);
        assert.exists(unconMythAsc.data);

        const data = unconMythAsc.data;

        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeAscending(currentCode, nextCode), 'Data tidak dalam urutan Ascending');            
        }

        // Fungsi untuk membandingkan dua kode apakah sudah Ascending atau belum
        function compareCodeAscending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);
            // Cek apakah kode pertama lebih kecil dari kode kedua
            return codeNumber1 < codeNumber2;
        }
    });
    it('Verify the data is Descending in Unconfirmed Mythic', async() => {
        const unconMythDesc = await axios.get(createURL('unconfirmed/mythic?sortBy=2'))
        assert.equal(unconMythDesc.status, 200);
        assert.exists(unconMythDesc.data);

        const data = unconMythDesc.data;

        // Cek urutan Descending berdasarkan code Mythic
        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeDescending(currentCode, nextCode), 'Data tidak dalam urutan Ascending');
        }
        // Fungsi untuk membandingkan dua kode apakah sudah Descending atau belum
        function compareCodeDescending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);
            // Cek apakah kode pertama lebih besar daripada kode kedua
            return codeNumber1 > codeNumber2;
        }
    });
});


describe('Ascending and Descending Casefiles', async() => {
    // Confirmed Casefile
    it('Verify that the data is Confirmed Casefile', async() => {
        /* Verify, ensure that the Data is confirmed, isConfirmed: true*/
        const conCasfAscs = supertest(createURL('confirmed/casefile?sortBy=3'));
        const responses = await conCasfAscs.get(''); 
        responses.body.data.casefile.forEach(conCasfAscs => {
            console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + conCasfAscs.code + " " + conCasfAscs.isConfirmed);
            expect(conCasfAscs.isConfirmed).to.be.true;
        });
    });
    it('Verify that the data is Ascending in Casefile', async() => {
        const conCasfAsc = await axios.get(createURL('confirmed/mythic?sortBy=3'));
         assert.equal(conCasfAsc.status, 200);
         assert.exists(conCasfAsc.data);
 
         const data = conCasfAsc.data;
 
         // Check urutan Ascending berdasarkan "code" Mythic
         for (let i = 0; i < data.length; i++) {
             const currentCode = data[i].code;
             const nextCode = data[i + 1].code;
             assert.isTrue(compareCodeAscending(currentCode, nextCode), 'Data tidak dalam urutan Ascending');
         }
 
         //Fungsi untuk membandingkan dua kode apakah sudah Ascending atau belum
         function compareCodeAscending(code1, code2) {
             const codeNumber1 = parseInt(code1.split('-')[1]);
             const codeNumber2 = parseInt(code2.split('-')[1]);
             
             // Cek kode pertama lebih kecil dari kode kedua
             return codeNumber1 < codeNumber2;
         }
     });
    it('Verify the data is Descending in Confirmed Casefile', async() => {
        const conCasfDesc = await axios.get(createURL('confirmed/casefile?sortBy=2'))
        assert.equal(conCasfDesc.status, 200);
        assert.exists(conCasfDesc.data);
        const data = conCasfDesc.data;

        // Melakukan cek urutan Descending berdasarkan code Casefile
        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeDescending(currentCode, nextCode), 'Data tidak dalam urutan Descending');
        }
        // Fungsi untuk membandingkan dua kode apakah sudah Descneding atau belum
        function compareCodeDescending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);

            // Cek apakah kode pertama lebih besar dari kode kedua
            return codeNumber1 > codeNumber2;
        }
    });

    // Unconfirm Casefile Files
    it('Ensure the data is Unconfirmed Casefile', async() => {
        /* Verify, ensure that the Data is Unconfirmed, isConfirmed: false*/
        const unconCaseAscs = supertest(createURL('unconfirmed/casefile?sortBy=3'));
        const responses = await unconCaseAscs.get(''); 
        responses.body.data.casefile.forEach(unconCaseAscs => {
            console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unconCaseAscs.code + " " + unconCaseAscs.isConfirmed);
            expect(unconCaseAscs.isConfirmed).to.be.false;
        });
    });
    it('Verify the data is Ascending in Unconfirmed Casefile', async() => {
        const unconCaseAsc = await axios.get(createURL('unconfirmed/casefile?sortBy=3'));
        assert.equal(unconCaseAsc.status, 200);
        assert.exists(unconCaseAsc.data);
        const data = unconCaseAsc.data;
        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeAscending(currentCode, nextCode), 'Data tidak dalam urutan Asending');

        }
        // Fungsi untuk membandingkan dua kode apakah sudah Ascending atau belum
        function compareCodeAscending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);
            // Cek apakah kode pertama lebih kecil dari kode kedua
            return codeNumber1 < codeNumber2;
        }
    });
    it('Descending in unconfirmed Casefile', async() => {
        const unconCaseDesc = await axios.get(createURL('unconfirmed/casefile?sortBy=2'))
        assert.equal(unconCaseDesc.status, 200);
        assert.exists(unconCaseDesc.data);

        const data = unconCaseDesc.data;

        // Cek urutan Descending berdasarkan code Mythic
        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeDescending(currentCode, nextCode), 'Data tidak dalam urutan Ascending');
        }
        // Fungsi untuk membandingkan dua kode apakah sudah Descending atau belum
        function compareCodeDescending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);
            // Cek apakah kode pertama lebih besar daripada kode kedua
            return codeNumber1 > codeNumber2;
        }
       
    });
});


describe('Ascending and Descending Dossier', async() => {
    // Confirm Dossier
    it('Ensure the data is Confirmed Dossier', async() => {
        /* Verify, ensure that the Data is confirmed, isConfirmed: true*/
        const conDosAscs = supertest(createURL('dossier?sortBy=3'));
        const responses = await conDosAscs.get(''); 
        responses.body.data.dossier.forEach(conDosAscs => {
            console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + conDosAscs.code + " " + conDosAscs.isConfirmed);
            expect(conDosAscs.isConfirmed).to.be.true;
        });
    });
    it('Verify the data is Ascending in Dossier', async() => {
        const conDosDataAsc = await axios.get(createURL('dossier?sortBy=3'))
        assert.equal(conDosDataAsc.status, 200);
        assert.exists(conDosDataAsc.data);

        const data = conDosDataAsc.data;

        for (let i = 0; i < data.length - i; i++){
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeAscending(currentCode, nextCode),'Data tidak dalam urutan Ascending');
        }
       // Fungsi untuk membandingkan dua kode apakah sudah Ascending atau belum
        function compareCodeAscending(code1, code2) {
        const codeNumber1 = parseInt(code1.split('-')[1]);
        const codeNumber2 = parseInt(code2.split('-')[1]);
             // Cek apakah kode pertama lebih kecil dari kode kedua
        return codeNumber1 < codeNumber2;
       }
 
    });
    it('Verify the data is Descending in Dossier', async() => {
        const conDosDesc = await axios.get(createURL('dossier?sortBy=2'))
        assert.equal(conDosDesc.status, 200);
        assert.exists(conDosDesc.data);

        const data = conDosDesc.data;

        // Check urutan Descending berdasarkan code Dossier
        for (let i = 0; i < data.length - 1; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeDescending(currentCode, nextCode), 'Data tidak dalam urutan Descending');
        }

        // Fungsi untuk membandingkan dua kode apakah sudah Descending atau belum
        function compareCodeDescending(code1, code2) {

            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);
            
            // Cek apakah kode pertama lebih besar dari kode kedua
            return codeNumber1 > codeNumber2;
        }
    });

    // Unconfirm Dossier is not available
});

describe('Ascending and Descending Addendum', async() => {
    // Confirmed Addendum
    it('Verify that the data is Confirmed in Addendum', async() => {
        const conAddAsc = await axios.get(createURL('confirmed/addendum?sortBy=3'))
        /* Verify, ensure that the Data is confirmed, isConfirmed: true*/
        const conAddAscs = supertest(createURL('confirmed/addendum?sortBy=3'));
        const responses = await conAddAscs.get(''); 
        responses.body.data.addendum.forEach(conAddAscs => {
            console.log("Ensure that the Data isConfirmed: true \n" + "actual --> " + conAddAscs.code + " " + conAddAscs.isConfirmed);
            expect(conAddAscs.isConfirmed).to.be.true;
        });
    });
    it('Verify that the data is Ascending in Addendum', async() => {
        const conAddAscs = await axios.get(createURL('confirmed/addendum?sortBy=3'));
         assert.equal(conAddAscs.status, 200);
         assert.exists(conAddAscs.data);
 
         const data = conAddAscs.data;
 
         // Check urutan Ascending berdasarkan "code" Mythic
         for (let i = 0; i < data.length; i++) {
             const currentCode = data[i].code;
             const nextCode = data[i + 1].code;
             assert.isTrue(compareCodeAscending(currentCode, nextCode), 'Data tidak dalam urutan Ascending');
         }
 
         //Fungsi untuk membandingkan dua kode apakah sudah Ascending atau belum
         function compareCodeAscending(code1, code2) {
             const codeNumber1 = parseInt(code1.split('-')[1]);
             const codeNumber2 = parseInt(code2.split('-')[1]);
             
             // Cek kode pertama lebih kecil dari kode kedua
             return codeNumber1 < codeNumber2;
         }
     });

    it('Verify the data is Descending in Confirmed Addendum', async() => {
        const conAddDesc = await axios.get(createURL('confirmed/addendum?sortBy=2'))
        assert.equal(conAddDesc.status, 200);
        assert.exists(conAddDesc.data);
        const data = conAddDesc.data;
        
        //Check urutan Descending berdasarkan code Mythic
        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeDescending(currentCode, nextCode), 'Data tidak dalam urutan Descending')
        }
        
        // Fungsi untuk membandingkan dua kode apakah sudah Descending atau belum
        function compareCodeDescending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);

            // Cek apakah kode pertama lebih besar dari kode kedua
            return codeNumber1 > codeNumber2;
        }
    });

    // Unconfirm Addendum Files
    it('Ensure the data is Unconfirmed Addendum', async() => {
        /* Verify, ensure that the Data is Unconfirmed, isConfirmed: false*/
        const unconAddAscs = supertest(createURL('unconfirmed/addendum?sortBy=3'));
        const responses = await unconAddAscs.get(''); 
        responses.body.data.addendum.forEach(unconAddAscs => {
            console.log("Ensure that the Data isConfirmed: false \n" + "actual --> " + unconAddAscs.code + " " + unconAddAscs.isConfirmed);
            expect(unconAddAscs.isConfirmed).to.be.false;
        });
    });
    it('Verify the data is Ascending in Unconfirmed Addendum', async() => {
        const unconAddAsc = await axios.get(createURL('unconfirmed/addendum?sortBy=3'));
        assert.equal(unconAddAsc.status, 200);
        assert.exists(unconAddAsc.data);

        const data = unconAddAsc.data;

        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeAscending(currentCode, nextCode), 'Data tidak dalam urutan Ascending');            
        }

        // Fungsi untuk membandingkan dua kode apakah sudah Ascending atau belum
        function compareCodeAscending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);
            // Cek apakah kode pertama lebih kecil dari kode kedua
            return codeNumber1 < codeNumber2;
        }
    });
    it('Verify the data is Descending in unconfirmed Addendum', async() => {
        const unconAddDesc = await axios.get(createURL('unconfirmed/addendum?sortBy=2'))
        assert.equal(unconAddDesc.status, 200);
        assert.exists(unconAddDesc.data);

        const data = unconAddDesc.data;

        // Cek urutan Descending berdasarkan code Mythic
        for (let i = 0; i < data.length; i++) {
            const currentCode = data[i].code;
            const nextCode = data[i + 1].code;

            assert.isTrue(compareCodeDescending(currentCode, nextCode), 'Data tidak dalam urutan Ascending');
        }
        // Fungsi untuk membandingkan dua kode apakah sudah Descending atau belum
        function compareCodeDescending(code1, code2) {
            const codeNumber1 = parseInt(code1.split('-')[1]);
            const codeNumber2 = parseInt(code2.split('-')[1]);
            // Cek apakah kode pertama lebih besar daripada kode kedua
            return codeNumber1 > codeNumber2;
        }
       
    });
});
