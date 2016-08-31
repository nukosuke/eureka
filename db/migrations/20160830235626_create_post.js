'use strict';

const tableName = 'posts';

exports.up = function(knex, Promise) {
  return knex.schema
  .hasTable(tableName)
  .then(exists => {
    if(!exists) {
      return knex.schema.createTable(tableName, t => {
        t.increments('id').primary();
        t.integer('user_id').references('id').inTable('users');
        t.string('title').notNullable();
        t.text('body').notNullable();
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
