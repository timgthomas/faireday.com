<script>
  import { DateTime } from 'luxon'
  import Banner from '$lib/components/banner.svelte'
  import Attribute from './attribute.svelte'
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
        <dl>
          <DayPart title="Day" isDay={true} model={day.daytimeForecast}>
            <Attribute label="High" value={formatTemperature(day.temperatureMax)} slot="attributes" />
          </DayPart>
          <DayPart title="Night" isDay={false} model={day.overnightForecast}>
            <Attribute label="Low" value={formatTemperature(day.temperatureMin)} slot="attributes" />
          </DayPart>
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
