import axios from 'axios'

export function sendEmail(payload) {
  return axios.post('/.netlify/functions/emailer', payload, {
    headers: {
      'content-type': 'application/json',
    },
  })
}
