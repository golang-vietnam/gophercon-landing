const sgMail = require('@sendgrid/mail')

function htmlify(message = '', fields = {}) {
  return Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .concat([`<br/>`, message])
    .join(`<br/>`)
}

exports.handler = function(event, context, callback) {
  // helper
  const respond = ({ status = 200, body = {} }) => {
    callback(null, {
      statusCode: status,
      body: body ? JSON.stringify(body) : null,
    })
  }

  // check if env var exist
  if (!process.env.SENDGRID_API_KEY) {
    callback(new Error('missing SENDGRID_API_KEY'))
    return
  }

  // parse request
  let req
  try {
    req = JSON.parse(event.body)
  } catch (error) {
    respond({ status: 400, body: { error } })
    return
  }

  // send
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { fullName, email, message } = req
  const msg = {
    to: 'huong@vid.com',
    from: email,
    subject: `[VID-2019] Inquiry from ${fullName || email}`,
    html: htmlify(message, { fullName, email }),
  }
  sgMail
    .send(msg)
    .then(resp => {
      respond({ status: 200 })
    })
    .catch(error => {
      console.log(error)
      respond({ status: 500, body: { error } })
    })
}
