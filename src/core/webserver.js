const express = require('express');
const next = require('next');
const server = express();
server.use(express.json());

function init() {

    const port = 8080;
    const dev = process.env.NODE_ENV !== 'production';
    const app = next({ dev, dir: './src/client' });
    const handle = app.getRequestHandler();

    app.prepare().then(() => {
        server.all('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) console.log(err);
            console.log(`Server listening on port: ${port}`);
        });
    })
}

module.exports = {
    App: server,
    init,
};