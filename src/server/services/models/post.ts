import Bookshelf from '../database';
import User from './user';

export default class Post extends Bookshelf.Model<Post> {
  get tableName() { return 'posts'; }
  get hasTimestamp() { return true; }

  user() {
    return this.belongsTo(User);
  }
}
