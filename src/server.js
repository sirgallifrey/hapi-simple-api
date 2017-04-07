'use strict';

const Hapi = require('hapi');
const Getconfig = require('getconfig');

const server = new Hapi.Server();

server.connection({
    port: Getconfig.port,
    host: Getconfig.host
});

server.registerEvent('register');


exports = module.exports = server;
