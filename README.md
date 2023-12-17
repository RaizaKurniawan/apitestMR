# apitestMR
API Test with Mocha JS Chai and Mochawesome for the report


on your command
*{ 

npm install
npm install mocha
npm install --save-dev mocha
npm install mochawesome
npm install --save-dev mochawesome


}

input this script into package.json
*{


    "scripts": {
    "clean": "rimraf mochawesome-report/",
    "test": "npm run clean && mocha ./apiMythRepo/ --timeout=30000 --reporter mochawesome",
    "singletest": "npx mocha ./api-test/asc-desSort.js --timeout=30000",
    "devtest": "npm run clean && mocha ./apiMythRepo/dev/ --timeout=30000 --reporter mochawesome",
    "stagtest": "npm run clean && mocha ./apiMythRepo/stag/ --timeout=30000 --reporter mochawesome",
    "uattest": "npm run clean && mocha ./apiMythRepo/uat/ --timeout=30000 --reporter mochawesome",
    "prodtest": "npm run clean && mocha ./apiMythRepo/prod/ --timeout=30000 --reporter mochawesome"
    }
}

create env.properties file in folder config, and input the url link

*{

    devURI = https://your-api-devurl/
    stagURI = https://your-api-stagurl/
    uatURI = https://your-api-uaturl/
    prodURI = https://your-api-produrl/

}

back to your terminal, then run this command below:

*{  

    npm run devtest or npm run stagtest

}



*{
    For running single file test

    npx mocha ./apiMythRepo/get-req.js --timeout=30000 --reporter mochawesome
}