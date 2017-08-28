const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/home/:id', (req, res) => {
      const id = req.params.id;
      const newQuery = Object.assign({}, req.query, { id });
      app.render(req, res, '/home', newQuery);
    });

    server.get('/b', (req, res) => { app.render(req, res, '/home', req.query); });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) {
        throw err;
      }
      console.log('> Ready on http://localhost:3000');
    });
  });
