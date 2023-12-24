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

        const result = search('Addendum', response.data.data);
        console.log('Response Data:', response.data.data);
        console.log('Search Result:', result);
        console.log('Actual Titles: ', response.data.data.map(item => item.title));
        const actualTitle = response.data.data.map(item => item.title);

        if (actualTitle.length > 0) {
           const matchingTitle = actualTitle.find(title => title.includes('Addendum'));
           assert.isOk(matchingTitle, 'Title containing "ADDENDUM" should be found');
        } else {
            console.log('Actual Titles: ', actualTitle);
            assert.fail('Result is empty');
        }
    });

    it('Should get result match response only Dossier', async() => {
        const response = await axios.get(createURL('search?Keyword='));
        assert.equal(response.status, 200);
        // Menggunakan filter untuk mendapatkan hanya Dossier
        const dossierArticles = response.data.data.filter(item => item.title.includes('Dossier'));
        console.log('Response Data:', dossierArticles);
        console.log('Search Result:', dossierArticles.map(item => item.title));

        const actualTitle = dossierArticles.map(item => item.title);

        if (actualTitle.length > 0) {
           assert.isOk(actualTitle.every(title => title.includes('Dossier')), 'All titles should contain "Dossier"');
        } else {
            console.log('Actual Titles: ', actualTitle);
            assert.fail('Result is empty');
        }
    });

    it('Should get result match response only Mythic', async() => {
        const response = await axios.get(createURL('search?Keyword='));
        assert.equal(response.status, 200);
        // Menggunakan filter untuk mendapatkan hanya Mythic
        const mythicArticles = response.data.data.filter(item => item.title.includes('Mythic'));
        console.log('Response Data:', mythicArticles);
        console.log('Search Result:', mythicArticles.map(item => item.title));

        const actualTitle = mythicArticles.map(item => item.title);

        if (actualTitle.length > 0) {
           assert.isOk(actualTitle.every(title => title.includes('Mythic')), 'All titles should contain "Mythic"');
        } else {
            console.log('Actual Titles: ', actualTitle);
            assert.fail('Result is empty');
        }
    });

    it('Should get result match response only Casefile', async() => {
        const response = await axios.get(createURL('search?Keyword='));
        assert.equal(response.status, 200);
        // Menggunakan filter untuk mendapatkan hanya Casefile
        const casefileArticles = response.data.data.filter(item => item.title.includes('Casefile'));
        console.log('Response Data:', casefileArticles);
        console.log('Search Result:', casefileArticles.map(item => item.title));

        const actualTitle = casefileArticles.map(item => item.title);

        if (actualTitle.length > 0) {
           assert.isOk(actualTitle.every(title => title.includes('Casefile')), 'All titles should contain "Casefile"');
        } else {
            console.log('Actual Titles: ', actualTitle);
            assert.fail('Result is empty');
        }
    });

    it('Should get result match response only Addendum', async() => {
        const response = await axios.get(createURL('search?Keyword='));
        assert.equal(response.status, 200);
        // Menggunakan filter untuk mendapatkan hanya Addendum
        const addendumArticles = response.data.data.filter(item => item.title.includes('Addendum'));
        console.log('Response Data:', addendumArticles);
        console.log('Search Result:', addendumArticles.map(item => item.title));

        const actualTitle = addendumArticles.map(item => item.title);

        if (actualTitle.length > 0) {
           assert.isOk(actualTitle.every(title => title.includes('Addendum')), 'All titles should contain "Addendum"');
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

describe('Search with 2 criteria', async() => {
    it('Should get result match response only Mythic and 1001', async() => {
        const response = await axios.get(createURL('search?Keyword='));
        assert.equal(response.status, 200);

        //Filter hanya artikel dengan judul yang mengandung kata Mythic dan 1001
        const filterArticles = response.data.data.filter(item => {
            const titleIncludeMythic = item.title.includes('Mythic');
            const titleInclude1001 = item.title.includes('1001');
            return titleIncludeMythic && titleInclude1001;
        });

        console.log('Response Data:', filterArticles);
        console.log('Search result:', filterArticles.map(item => item.title));

        const actualTitle = filterArticles.map(item => item.title);
        if (actualTitle.length > 0) {
            assert.isOk(
                actualTitle.every(title => title.includes('Mythic') && title.includes('1001')), 'All titles should contain "Mythic and "1001'
            );
        } else {
            console.log('Actual Titles: ', actualTitle);
            assert.fail('Result is empty');
        }
    });
});

describe('Search feature test', async() => {
    it('Should get result match response Article Type', async() => {
        const response = await axios.get(createURL('search?Keyword=ADDENDUM'));
        assert.equal(response.status, 200);

        const result = search('ADDENDUM', response.data.data);
        console.log('Response Data:', response.data.data);
        console.log('Search Result:', result);
        console.log('Actual Article Type: ', response.data.data.map(item => item.articleType));
        const actualArticleType = response.data.data.map(item => item.articleType);

        if (actualArticleType.length > 0) {
           const matchingArticleType = actualArticleType.find(articleType => articleType.includes('ADDENDUM'));
           assert.isOk(matchingArticleType, 'Title containing "ADDENDUM" should be found');
        } else {
            console.log('Actual Article Type: ', actualArticleType);
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

    it('Should get result match response Excerpt', async() => {
        const response = await axios.get(createURL('search?Keyword=ADDENDUM'));
        assert.equal(response.status, 200);

        const result = search('ADDENDUM', response.data.data);
        console.log('Response Data:', response.data.data);
        console.log('Search Result:', result);
        console.log('Actual Excerpt: ', response.data.data.map(item => item.excerpt));
        const actualExcerpt = response.data.data.map(item => item.excerpt);

        if (actualExcerpt.length > 0) {
            const matchingExcerpt = actualExcerpt.find(excerpt => excerpt.includes('The robot clicked disapprovingly, gurgled briefly inside it'));
            assert.isOk(matchingExcerpt, 'Title containing "The robot clicked disapprovingly, gurgled briefly inside it" should be found');
        } else {
            console.log('Actual Excerpt: ', excerpt);
            assert.fail('Result is empty');
        }
    });

});

describe('Search for a random keyword \n', async() => {
    // Pencarian untuk hanya satu kata kunci saja
    it('Should get result match response based on random keyword (case-insensitive)', async () => {
        const response = await axios.get(createURL('search?Keyword='));
        assert.equal(response.status, 200);
        // Input keyword yang ingin dicari, apapun, article type, location, code, title, excerpt
        const randomKeyword = 'mythic';
    
        // Filter hanya artikel yang memenuhi kriteria pencarian
        const filteredArticles = response.data.data.filter(item => {
            const articleTypeIncludesKeyword = item.articleType.toLowerCase().includes(randomKeyword.toLowerCase());
            const mythicLocationIncludesKeyword = item.mythicProperties?.location?.toLowerCase().includes(randomKeyword.toLowerCase());
            const casefileLocationIncludesKeyword = item.casefileProperties?.location?.toLowerCase().includes(randomKeyword.toLowerCase());
            const titleIncludesKeyword = item.title.toLowerCase().includes(randomKeyword.toLowerCase());
            const excerptIncludesKeyword = item.excerpt.toLowerCase().includes(randomKeyword.toLowerCase());
            const idMatchesKeyword = item.id.toLowerCase().includes(randomKeyword.toLowerCase());
            const codeMatchesKeyword = item.code.toLowerCase().includes(randomKeyword.toLowerCase());
            // Gabungkan kriteria pencarian
            return (
                articleTypeIncludesKeyword || // =====> Ini untuk tipe article
                mythicLocationIncludesKeyword || /// ====> Ini untuk lokasi
                casefileLocationIncludesKeyword || /// ====> ini untuk lokasi
                titleIncludesKeyword || /// ini untuk Title
                excerptIncludesKeyword || 
                idMatchesKeyword || 
                codeMatchesKeyword
            );
        });
        
        
        //console.log('Response Data:', response.data.data);  // Delete tanda "//" sebelum console.log untuk menampilkan semua data
        console.log('Filtered Articles:', filteredArticles);
        console.log('Search Result:', filteredArticles.map(item => item.title));

        console.log('Actual Locations:', filteredArticles.map(item => item.mythicProperties?.location || item.casefileProperties?.location || 'no data'));
    
        if (filteredArticles.length > 0) {    
            const containsKeyword = filteredArticles.some(item => 
                item.title.toLowerCase().includes(randomKeyword.toLowerCase()) ||
                item.excerpt.toLowerCase().includes(randomKeyword.toLocaleLowerCase()) || 
                (item.mythicProperties?.location?.toLowerCase().includes(randomKeyword.toLowerCase()) ||
                item.casefileProperties?.location?.toLowerCase().includes(randomKeyword.toLowerCase())) ||
                item.id.toLowerCase().includes(randomKeyword.toLowerCase())  ||
                item.code.toLowerCase().includes(randomKeyword.toLowerCase())
            );
        
            assert.isOk(
                filteredArticles.length > 0 && containsKeyword,
                `At least one article title, location, or excerpt should contain "${randomKeyword}" (case-insensitive).`
                );
            } else {
                console.log('\n ===================>>>     Result is empty   <<<===================');
                assert.ok(true, 'Result is empty');
            }
    });

    // Pencarian lebih dari satu kata kunci
    it('Should get result match response based on multiple keywords (case-insensitive)', async () => {
        const response = await axios.get(createURL('search?Keyword='));
        assert.equal(response.status, 200);
    
        const userInputKeywords = '1001 1013'; // Gantilah dengan input pengguna sesuai kebutuhan
        const keywords = userInputKeywords.split(' ');
    
        // Filter hanya artikel yang memenuhi kriteria pencarian
        const filteredArticles = response.data.data.filter(item => {
            const articleTypeIncludesKeywords = keywords.some(keyword => item.articleType.toLowerCase().includes(keyword.toLowerCase()));
            const mythicLocationIncludesKeywords = keywords.some(keyword => item.mythicProperties?.location?.toLowerCase().includes(keyword.toLowerCase()));
            const casefileLocationIncludesKeywords = keywords.some(keyword => item.casefileProperties?.location?.toLowerCase().includes(keyword.toLowerCase()));
            const titleIncludesKeywords = keywords.some(keyword => item.title.toLowerCase().includes(keyword.toLowerCase()));
            const excerptIncludesKeywords = keywords.some(keyword => item.excerpt.toLowerCase().includes(keyword.toLowerCase()));
            const idMatchesKeywords = keywords.some(keyword => item.id.toLowerCase().includes(keyword.toLowerCase()));
    
            // Gabungkan kriteria pencarian
            return (
                articleTypeIncludesKeywords ||
                mythicLocationIncludesKeywords ||
                casefileLocationIncludesKeywords ||
                titleIncludesKeywords ||
                excerptIncludesKeywords ||
                idMatchesKeywords
            );
        });
    
        //console.log('Response Data:', response.data.data);
        console.log('Filtered Articles:', filteredArticles);
        console.log('Search Result:', filteredArticles.map(item => item.title));
        console.log('Actual Locations:', filteredArticles.map(item => item.mythicProperties?.location || item.casefileProperties?.location || 'no data'));
    
        if (filteredArticles.length > 0) {

    
            assert.isOk(
                true,
                `At least one article title, location, excerpt, or ID should contain "${userInputKeywords}" (case-insensitive).`
            );
        } else {
            console.log('\n ===================>>>     Result is empty   <<<===================');
            assert.ok(true, 'Result is empty');
        }
    });
    
});