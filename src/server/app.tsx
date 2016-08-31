import * as express from 'express';
import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import App from '../client/App';

const app = express();

// provide static files
app.use(express.static('public'));

// routing for react server-side rendering
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>react</title>
      </head>
      <body>
        <div id='app'>`
          + ReactDOM.renderToString(<App/>) +
       `</div>
        <script src='/assets/javascripts/app.js'></script>
      </body>
    </html>
  `);
});

export default app;
