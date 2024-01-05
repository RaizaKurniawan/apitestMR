const axios = require('axios');
const { expect, assert } = require('chai');
var PropertiesReader = require('properties-reader');
const { search } = require('superagent');
const { describe } = require('mocha');
var properties = PropertiesReader('config/env.properties');
const baseURL = properties.get('stagURI');
const createURL = (path) => `${baseURL}${path}`;
const supertest = require('supertest');

module.exports = {
    axios, expect, assert, search, baseURL, supertest, describe,
    createURL: (path) => `${baseURL}${path}`,
};
