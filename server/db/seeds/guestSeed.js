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
          table_Number: 1,
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
          table_Number: 1,
        },
        {
          id: '3',
          name: 'Angela',
          email: 'angela_yk@hotmail.com',
          plusone: false,
          plusone_Name: '',
          dietary: 'dairy',
          rsvp: false,
          event_id: 1,
          table_Number: 2,
        },
        {
          id: '4',
          name: 'David',
          email: 'davehu0623@gmail.com',
          plusone: false,
          plusone_Name: '',
          dietary: 'pesca-pescatarian',
          rsvp: true,
          event_id: 2,
          table_Number: 3,
        },
        {
          id: '5',
          name: 'Ngairo',
          email: 'ngairotap@gmail.com',
          plusone: false,
          plusone_Name: '',
          dietary: 'none',
          rsvp: false,
          event_id: 1,
          table_Number: 1,
        },
      ])
    )
}
