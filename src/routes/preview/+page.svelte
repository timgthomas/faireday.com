<script>
  import { DateTime } from 'luxon'
  import Banner from '$lib/components/banner.svelte'
  import Icon from '$lib/components/icon.svelte'
  import Title from '$lib/components/title.svelte'
  import formatTemperature from '$lib/utils/format-temperature'
  import Attribute from './attribute.svelte'
  import DayPart from './day-part.svelte'
  import DayTile from './day-tile.svelte'

  export let data
  
  function formatDayOfTheWeek(isoDateTime, format) {
    return DateTime
      .fromISO(isoDateTime)
      .setZone('America/Chicago')
      .plus({ days: 1 }) // HACK: Fix on API side
      .toFormat(format)
  }
</script>

<svelte:head>
  <title>Faire Day &middot; Sherwood Celtic Music Festival</title>
  <script defer data-domain="faireday.com" src="https://plausible.io/js/plausible.js"></script>
</svelte:head>

<Title title="Sherwood Celtic Music Festival" />
<main>
  <section>
    <Banner title="Weekend" />
    <ol class="weekend">
      {#each data.weather.forecastDaily.days as day}
        <li>
          <DayTile title={formatDayOfTheWeek(day.forecastStart, 'ccc')} model={day} />
        </li>
      {/each}
    </ol>
  </section>
  <ol class="daily">
    {#each data.weather.forecastDaily.days as day}
      <li>
        <Banner title={formatDayOfTheWeek(day.forecastStart, 'cccc')} />
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
  <section>
    <Banner title="Faire Day" />
    <p>Whether you're planning out a season's worth of garb or just deciding whether to wear that extra coin belt on the day, Faire Day is your source for updated weather conditions and details of your favorite festivals!</p>
  </section>
</main>
<footer>
  <a class="app-store" href="https://apple.co/3fDEqho">Download on the App Store</a>
  <a class="apple-weather" href={data.weather.forecastDaily.metadata.attributionURL} target="_blank" rel="noopener noreferrer">Powered by</a>
</footer>

<style>
  li,
  main,
  .daily {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  
  .weekend {
    display: flex;
    justify-content: center;
  }
  
    .weekend li {
      padding: 1rem 1.5rem;
    }
    
    .weekend li:not(:last-of-type) {
      border-right: 0.5px solid var(--foreground-tertiary);
    }

  .daily li {
    width: 100%;
  }

  dl {
    display: flex;
  }

  dl :global(> div:first-of-type) {
    border-right: 0.5px solid var(--foreground-tertiary);
  }
  
  p {
    background: bottom center / 20rem 20rem no-repeat url('/app.png');
    border-bottom: 0.5px solid var(--foreground-tertiary);
    font-size: 1.6rem;
    margin-bottom: -4rem;
    padding-bottom: 21rem;
    text-align: center;
    width: 25rem;
  }
  
  footer {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .apple-weather {
    background: bottom center / 6rem 1.1rem no-repeat url('/apple-weather.png');
    color: inherit;
    display: inline-block;
    font-family: 'Alegreya SC';
    font-size: 1.2rem;
    font-weight: 500;
    opacity: 0.5;
    padding-bottom: 1.3rem;
    text-align: center;
    text-decoration: none;
    text-transform: lowercase;
  }
  
  .app-store {
    background-image: url('/app-store.svg');
    background-size: cover;
    font: 0 / 0 a;
    height: 4.0rem;
    width: 12.0rem;
  }
</style>
