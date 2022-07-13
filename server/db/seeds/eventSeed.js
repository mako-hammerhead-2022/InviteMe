exports.seed = function (knex) {
  return knex('event').insert([
    { id: 1, host_id: 1 },
    { id: 2, host_id: 2 },
  ])
}
