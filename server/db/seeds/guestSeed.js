// const uuid = require('uuid')

exports.seed = function (knex) {
  return knex('guest')
    .del()
    .then(() =>
      knex('guest').insert([
        {
          id: '1',
          name: 'Ayoung',
          email: 'ayoungleeh@gmail.com',
          plusone: 1,
          plusone_Name: 'Haru',
          dietary: 'none',
          rsvp: 1,
          event_id: 1,
          groupNumber: 1,
        },
        {
          id: '2',
          name: 'Beyond',
          email: 'allstar_beyond@hotmail.com',
          plusone: 1,
          plusone_Name: 'Christina',
          dietary: 'fish',
          rsvp: 1,
          event_id: 1,
          groupNumber: 1,
        },
        {
          id: '3',
          name: 'Angela',
          email: 'angela_yk@hotmail.com',
          plusone: 0,
          plusone_Name: '',
          dietary: 'dairy',
          rsvp: 0,
          event_id: 1,
          groupNumber: 2,
        },
        {
          id: '4',
          name: 'David',
          email: 'davehu0623@gmail.com',
          plusone: 0,
          plusone_Name: '',
          dietary: 'pesca-pescatarian',
          rsvp: 1,
          event_id: 2,
          groupNumber: 3,
        },
        {
          id: '5',
          name: 'Ngairo',
          email: 'ngairotap@gmail.com',
          plusone: 0,
          plusone_Name: '',
          dietary: 'none',
          rsvp: 0,
          event_id: 1,
          groupNumber: 1,
        },
      ])
    )
}
