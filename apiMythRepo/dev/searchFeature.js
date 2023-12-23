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

describe('Search feature Test', async() => {
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

describe('Search for a random keyword', async() => {
    it.only('Should get result match response based on random keyword', async() => {
        const response = await axios.get(createURL('search?key='));
        assert.equal(response.status, 200);

        const randomKeyword = 'dossier'; // <===== Input randow keyword, any keyword you like
        // Kemudian filter yang hanya memenuhi kriteria pencarian
        const filterArticles = response.data.data.filter(item => {
            const articleTypekeyword = item.articleType.includes(randomKeyword);
            const mythicLocationkeyword = item.mythicProperties?.location.includes(randomKeyword);
            const casefileLocationkeyword = item.casefileProperties?.location.includes(randomKeyword);
            const titleIncludesKeyword = item.title.includes(randomKeyword);
            const excerptIncludesKeyword = item.excerpt.includes(randomKeyword);

            // Pencarian gabungan gaes
            return (
                articleTypekeyword || 
                mythicLocationkeyword ||
                casefileLocationkeyword || 
                titleIncludesKeyword ||
                excerptIncludesKeyword 
            );

        });
        console.log('Response Data: ', filterArticles);
        console.log('Search result: ', filterArticles.map(item => item.title));
        const actualTitle = filterArticles.map(item => item.title);
        if (actualTitle.length > 0) {
            assert.isOk(
                actualTitle.every(title => 
                    title.includes(randomKeyword) 
                    /// tambahkan kriteria lainnya bila ada    
                ), 
                'All title should contain "${randomKeyword}" or other criteria'
            );
        } else {
            console.log('Actual Title: ', actualTitle);
            assert.fail('Result is empty');
        }
    });
});