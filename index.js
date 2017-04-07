'use strict';

const Server = require('./src/server');

Server.start((err) => {

    if (err) {
        console.log(err);
        process.exit(1);
    }

    console.log(`Server started at: ${Server.info.uri}`);
});
