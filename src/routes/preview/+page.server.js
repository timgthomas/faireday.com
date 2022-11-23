const baseUrl = 'https://faireday-api.vercel.app/api/v3'
// const baseUrl = 'http://localhost:3000/api/v3'
const faire = 'trf'
const weekend = 'trf-2022-8'
const title = 'TRF’s Celtic Christmas'
const previewEnabled = true

export async function load() {
  if (!previewEnabled) return {}
  const url = `${baseUrl}/faires/${faire}/weather?weekendId=${weekend}`
  const weatherRequest = await fetch(url)
  const weather = await weatherRequest.json()
  return { ...weather, title }
}
