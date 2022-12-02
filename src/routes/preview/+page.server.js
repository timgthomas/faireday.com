const baseUrl = 'https://faireday-api.vercel.app/api/v3'
// const baseUrl = 'http://localhost:3000/api/v3'
const faire = 'larf'
const weekend = 'larf-2022-6'
const title = 'LARF’s Fireworks Finale'
const previewEnabled = true

export async function load() {
  if (!previewEnabled) return {}
  const url = `${baseUrl}/faires/${faire}/weather?weekendId=${weekend}`
  const weatherRequest = await fetch(url)
  const weather = await weatherRequest.json()
  return { ...weather, title }
}
