import * as express from 'express';
import User from './services/models/user';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  User
  .fetchAll()
  .then(users => {
    res.send(users);
  });
});

export default app;
