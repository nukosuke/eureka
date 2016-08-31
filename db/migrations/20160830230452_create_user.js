'use strict';

const tableName = 'users';

exports.up = function(knex, Promise) {
  return knex.schema
  .hasTable(tableName)
  .then(exists => {
    if(!exists) {
      return knex.schema.createTable(tableName, t => {
        t.increments('id').primary();
        t.string('email').unique().notNullable();
        t.string('password_hash').notNullable();
        t.timestamps();
      });
    }
    else {
      return new Error(`'${tableName}' table already exists`);
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .hasTable(tableName)
  .then(exists => {
    if(exists) {
      return knex.schema.dropTable(tableName);
    }
  });
};
