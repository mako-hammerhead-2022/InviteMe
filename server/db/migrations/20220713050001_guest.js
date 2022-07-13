exports.up = function (knex) {
    return knex.schema.createTable('guest', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
      table.string('plusone')
      table.string('diatary')
      table.boolean('rsvp')
      table.integer('table_id')
      table.integer('event_id')
      table.integer('table_Number')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('guest')
  }