const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then( async () => {
  const server = express();
  if(process.env.NODE_ENV === 'production'){
    server.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`);
      } else {
        next();
      }
    });
  }

  server.get('/blog/:id', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, '/blog-post', mergedQuery);
  });


  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;


  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});
