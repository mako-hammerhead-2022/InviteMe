exports.up = function (knex) {
  return knex.schema.createTable('host', (table) => {
    table.increments('id').primary()
    table.integer('event_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('host')
}
