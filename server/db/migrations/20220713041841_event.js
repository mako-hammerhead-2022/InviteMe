exports.up = function (knex) {
  return knex.schema.createTable('event', (table) => {
    table.increments('id').primary()
    table.integer('host_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('event')
}
