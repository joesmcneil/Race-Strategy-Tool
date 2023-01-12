// Importing the express module
const express = require('express');

// Creating the express.js server
const app = express();

function init(port, err) {

    app.use(express.stastic('../client/'));

    app.listen(port);
    if (!err) {
        console.log('Server accessible on port:' + ' ' + port);
    }
}

module.exports = {
    init,
    app: app,
};