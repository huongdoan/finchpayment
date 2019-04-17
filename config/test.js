'use strict';

// Test environment settings
let config = {};

// Use special purpose test database
config.databaseUrl = 'postgres://localhost:5432/finchpaymentdb-test';

module.exports = config;
