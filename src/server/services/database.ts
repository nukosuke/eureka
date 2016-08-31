import * as Knex      from 'knex';
import * as bookshelf from 'bookshelf';

const knex      = Knex(require('../../../knexfile')[process.env.NODE_ENV]);
const Bookshelf = bookshelf(knex);

export {knex};
export default Bookshelf;
