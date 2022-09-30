<script>
  import { DateTime } from 'luxon'
  import Banner from '$lib/components/banner.svelte'
  import Icon from '$lib/components/icon.svelte'
  import Title from '$lib/components/title.svelte'
  import formatTemperature from '$lib/utils/format-temperature'
  import Attribute from './attribute.svelte'
  import Attribution from './attribution.svelte'
  import DayPart from './day-part.svelte'
  import DayTile from './day-tile.svelte'

  export let data
  
  $: isActive = !!data.weather?.forecastDaily
  
  function formatDayOfTheWeek(isoDateTime, format) {
    return DateTime
      .fromISO(isoDateTime)
      .setZone('America/Chicago') // TODO: Pull from faire
      .toFormat(format)
  }
</script>

<svelte:head>
  {#if isActive}
    <meta property="og:title" content="Faire Day · {data.title}">
    <title>Faire Day · {data.title}</title>
  {:else}
    <meta property="og:title" content="Faire Day: Faire and Festival Weather">
    <title>Faire Day: Faire and Festival Weather</title>
  {/if}
  <script defer data-domain="faireday.com" src="https://plausible.io/js/plausible.js"></script>
</svelte:head>

<Title title={data.title} isActive={isActive} />
<main>
  {#if isActive}
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
            {#if day.daytimeForecast}
              <DayPart title="Day" isDay={true} model={day.daytimeForecast}>
                <Attribute label="High" value={formatTemperature(day.temperatureMax)} slot="attributes" />
              </DayPart>
            {/if}
            {#if day.overnightForecast}
              <DayPart title="Night" isDay={false} model={day.overnightForecast}>
                <Attribute label="Low" value={formatTemperature(day.temperatureMin)} slot="attributes" />
              </DayPart>
            {/if}
          </dl>
        </li>
      {/each}
    </ol>
  {:else}
    <p class="error">We hope you enjoyed the latest Faire Day preview!</p>
    <p class="error">Download Faire Day below to see more faire and festival weather, and check back soon for another event!</p>
  {/if}
  <section class="about">
    <Banner title="Faire Day" />
    <p>
      Whether you're planning out a season's worth of garb or just deciding whether to wear that extra coin belt on the day, Faire Day is your source for updated weather conditions and details of your favorite festivals!<br>
      <a href="https://faireday.com">Learn more »</a>
    </p>
    <p>
      Want to help shape Faire Day’s future?<br>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP_6dIuB05QNiYGyXmrOfyQyPPfv8jTcFTZWbrQbQDTiot7w/viewform?fbclid=IwAR1jOHOWRA9r-3uRO7WTJkm2kEiInt_fKAdUwHl39LSew7No0n6fk1YxjPw" target="_blank" rel="noopener noreferrer">Take our survey »</a>
    </p>
  </section>
</main>
<footer>
  <a class="app-store" href="https://apple.co/3fDEqho" target="_blank" rel="noopener noreferrer">Download on the App Store</a>
  {#if data?.weather?.forecastDaily?.metadata.attributionURL}
    <Attribution url={data.weather.forecastDaily.metadata.attributionURL} />
  {/if}
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
    
    .weekend li:not(:first-of-type) {
      border-left: 0.5px solid var(--foreground-tertiary);
    }

  .daily li {
    width: 100%;
  }

  dl {
    display: flex;
  }

  dl :global(> div:not(:first-of-type)) {
    border-left: 0.5px solid var(--foreground-tertiary);
  }
  
  p {
    font-size: 1.6rem;
  }

  .about p {
    text-align: center;
    width: 25rem;
  }

    .about p + p {
      margin-top: 2rem;
    }
  
  p.error {
    margin: 0 auto;
    padding-top: 2rem;
    text-align: center;
    width: 25rem;
  }
  
    p.error:first-of-type {
      margin-top: 5rem;
    }
  
    p.error:last-of-type {
      margin-bottom: 5rem;
    }
  
  footer {
    align-items: center;
    background: top center / 20rem 20rem no-repeat url('/app.png');
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    margin-top: 2rem;
    padding-top: 18rem;
    position: relative;
  }
  
    footer::after {
      border-bottom: 0.5px solid var(--foreground-tertiary);
      content: '';
      display: block;
      position: absolute;
      top: 20rem;
      width: 25rem;
    }

  .app-store {
    background-image: url('/app-store.svg');
    background-size: cover;
    font: 0 / 0 a;
    height: 4.0rem;
    width: 12.0rem;
    z-index: 1;
  }
</style>
