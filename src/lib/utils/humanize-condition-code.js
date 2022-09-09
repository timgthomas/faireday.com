const clearStyle = {
  icon: (isDay) => `clear-${isDay ? 'sun' : 'moon'}`,
}

const partlyCloudyStyle = {
  icon: (isDay) => `cloudy-${isDay ? 'sun' : 'moon'}`,
}

const rainyStyle = {
  icon: () => 'cloudy-rain',
}

const windyStyle = {
  icon: () => 'wind',
}

// Possible `conditionCode` values:
// > https://github.com/hrbrmstr/weatherkit/blob/batman/R/enumerations.R
const conditionCodeMap = {
  Clear: clearStyle,
  Cloudy: { icon: () => 'cloudy' },
  // Dust: {},
  // Fog: {},
  // Haze: {},
  MostlyClear: clearStyle,
  MostlyCloudy: partlyCloudyStyle,
  PartlyCloudy: partlyCloudyStyle,
  ScatteredThunderstorms: rainyStyle,
  // Smoke: {},
  Breezy: windyStyle,
  Windy: windyStyle,
  Drizzle: rainyStyle,
  HeavyRain: rainyStyle,
  Rain: rainyStyle,
  Showers: rainyStyle,
  // Flurries: {},
  // HeavySnow: {},
  // MixedRainAndSleet: {},
  // MixedRainAndSnow: {},
  MixedRainfall: rainyStyle,
  // MixedSnowAndSleet: {},
  ScatteredShowers: rainyStyle,
  // ScatteredSnowShowers: {},
  // Sleet: {},
  // Snow: {},
  // SnowShowers: {},
  // Blizzard: {},
  // BlowingSnow: {},
  // FreezingDrizzle: {},
  // FreezingRain: {},
  // Frigid: {},
  // Hail: {},
  Hot: clearStyle,
  Hurricane: rainyStyle,
  IsolatedThunderstorms: rainyStyle,
  SevereThunderstorm: rainyStyle,
  Thunderstorms: rainyStyle, // Formerly "Thunderstorm"
  // Tornado: {},
  TropicalStorm: rainyStyle,
}

export default function humanizeConditionCode(code, isDay) {
  if (!conditionCodeMap[code]) {
    console.warn(`Unknown condition code: ${code}`)
    return { icon: 'unknown' }
  }
  
  const humanizedCode = conditionCodeMap[code]
  return { ...humanizedCode, icon: humanizedCode.icon(isDay) }
}
