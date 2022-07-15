exports.seed = function (knex) {
  return knex('guest')
    .del()
    .then(() =>
      knex('guest').insert([
        {
          id: 1,
          name: 'Ayoung',
          email: 'ayoung@gmail.com',
          plusone: true,
          plusone_Name: 'Haru',
          dietary: 'none',
          rsvp: true,
          event_id: 1,
          table_Number: 1,
        },
        {
          id: 2,
          name: 'Beyond',
          email: 'Beyond@gmail.com',
          plusone: true,
          plusone_Name: 'Christina',
          dietary: 'fish',
          rsvp: false,
          event_id: 1,
          table_Number: 1,
        },
        {
          id: 3,
          name: 'Angela',
          email: 'Angela@gmail.com',
          plusone: false,
          plusone_Name: '',
          dietary: 'dairy',
          rsvp: false,
          event_id: 1,
          table_Number: 2,
        },
        {
          id: 4,
          name: 'David',
          email: 'David@gmail.com',
          plusone: false,
          plusone_Name: '',
          dietary: 'pesca-pescatarian',
          rsvp: true,
          event_id: 2,
          table_Number: 3,
        },
        {
          id: 5,
          name: 'Ngairo',
          email: 'Ngairo@gmail.com',
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
