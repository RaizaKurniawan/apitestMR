# apitestMR
API Test with Mocha JS Chai and Mochawesome for the report


on your command
npm install
npm install mochawesome
npm install --save-dev mochawesome

input this script into package.json

"scripts": {
    "clean": "rimraf mochawesome-report/",
    "test": "npm run clean && mocha ./apiMythRepo/ --timeout=30000 --reporter mochawesome"
}


back to your terminal, then run this command below:

npm test