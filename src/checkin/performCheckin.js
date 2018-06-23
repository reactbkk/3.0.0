import axios from 'axios'

export async function performCheckIn (refCode, totp, eventId) {
  const response = await axios.post(
    'https://us-central1-reactbkk3-tickets-checkin.cloudfunctions.net/checkIn',
    {
      refCode: `${refCode}`.toUpperCase(),
      totp,
      eventId,
    }
  )
  return response.data
}
