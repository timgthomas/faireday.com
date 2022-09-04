export default function formatTemperature(tempInC) {
  const tempInF = tempInC * 1.8 + 32
  return `${Math.round(tempInF)}°`
}
