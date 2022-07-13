exports.seed = function (knex) {
  return knex('host').insert([
    { id: 1, event_id: 1 },
    { id: 2, event_id: 2 },
  ])
}
