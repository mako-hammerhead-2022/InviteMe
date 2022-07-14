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

function sendEmail(options) {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'invitemetesting@outlook.com',
      pass: 'DevAcademy1',
    },
  })

  // const options = {
  //   from: 'invitemetesting@outlook.com',
  //   to: [],
  //   subject: 'another test email',
  //   text: 'this is a dev test email',
  // }

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err)
      return
    }
    console.log('sent: ' + info.response)
  })
}

// sendEmail()
module.exports = {
  sendEmail,
}
