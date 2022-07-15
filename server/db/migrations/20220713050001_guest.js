exports.up = function (knex) {
  return knex.schema.createTable('guest', (table) => {
    table.string('id').primary()
    table.string('name')
    table.string('email')
    table.boolean('plusone')
    table.string('plusone_Name')
    table.string('dietary')
    table.boolean('rsvp')
    table.integer('event_id')
    table.integer('table_Number')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('guest')
}
