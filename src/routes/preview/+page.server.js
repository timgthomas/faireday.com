const baseUrl = 'https://faireday-api.vercel.app/api/v3'
// const baseUrl = 'http://localhost:3000/api/v3'
const faire = 'sherwood'
const weekend = 'sherwood-2022-extra-3'

export async function load() {
  const url = `${baseUrl}/faires/${faire}/weather?weekendId=${weekend}`
  const weatherRequest = await fetch(url)
  const weather = await weatherRequest.json()
  return { weather }
}
