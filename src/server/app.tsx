import * as express from 'express';
import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../routes';
import App from '../client/App';

const app = express();

// provide static files
app.use(express.static('public'));

// routing for react server-side rendering
app.use((req, res: express.Response, next) => {
  match({
    routes,
    location: req.url
  },
  (err, redirectLocation, renderProps) => {
    if (err) {
      next(err);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!renderProps) {
      res.status(404).send('Not Found');
    } else {
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>react</title>
          </head>
          <body>
            <div id='app'>`
              + ReactDOM.renderToString(
                <RouterContext {...renderProps} />
              ) +
           `</div>
            <script src='/assets/javascripts/app.js'></script>
          </body>
        </html>
      `);
    }
  });
});

export default app;
