const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//   service: 'hotmail',
//   auth: {
//     user: 'invitemetesting@outlook.com',
//     pass: 'DevAcademy1',
//   },
// })

// const options = {
//   from: 'invitemetesting@outlook.com',
//   to: 'invitemetesting@outlook.com',
//   subject: 'another test email',
//   text: 'this is a dev test email',
// }

function sendEmail(recipient) {
  // [{email: 'hi@inviteme.com', id: 1}]
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'invitemetesting@outlook.com',
      pass: 'DevAcademy1',
    },
  })

  const options = {
    from: 'invitemetesting@outlook.com',
    to: recipient.email,
    subject: 'You are invited to our wedding!',
    text: `Please RSVP by signing in with this email address http://localhost:3000/rsvp/${recipient.id}`,
  }
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, function (err, info) {
      if (err) {
        reject(err)
      }
      resolve(info)
    })
  })
}

// sendEmail()
module.exports = {
  sendEmail,
}
