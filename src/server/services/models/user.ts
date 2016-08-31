import Bookshelf from '../database';
import Post from './post';

export default class User extends Bookshelf.Model<User> {
  get tableName() { return 'users'; }
  get hasTimestamp() { return true; }

  posts() {
    return this.hasMany(Post);
  }
}
