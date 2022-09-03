<script>
  import { DateTime } from 'luxon'
  import Banner from '$lib/components/banner.svelte'
  import DayPart from './day-part.svelte'

  export let data
  
  function formatDayOfTheWeek(isoDateTime) {
    return DateTime
      .fromISO(isoDateTime)
      .setZone('America/Chicago')
      .plus({ days: 1 }) // HACK: Fix on API side
      .toFormat('cccc')
  }
  
  function formatTemperature(tempInC) {
    const tempInF = tempInC * 1.8 + 32
    return `${Math.round(tempInF)}°`
  }
</script>

<main>
  <ol>
    {#each data.weather.forecastDaily.days as day}
      <li>
        <Banner title={formatDayOfTheWeek(day.forecastStart)} />
        <p>H: {formatTemperature(day.temperatureMax)}</p>
        <p>L: {formatTemperature(day.temperatureMin)}</p>
        <dl>
          <DayPart title="Day" model={day.daytimeForecast} />
          <DayPart title="Night" model={day.overnightForecast} />
        </dl>
      </li>
    {/each}
  </ol>
</main>

<style>
  dl {
    display: flex;
  }

  dl :global(> div:first-of-type) {
    border-right: 0.5px solid var(--foreground-tertiary);
  }
  
  ol, li {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
