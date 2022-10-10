<script>
  import Icon from '$lib/components/icon.svelte'
  import humanizeConditionCode from '$lib/utils/humanize-condition-code'
  import Attribute from './attribute.svelte'

  export let title
  export let model
  export let isDay = false

  $: condition = humanizeConditionCode(model.conditionCode, isDay)
  $: wind = `${Math.round(model.windSpeed)}mph`

  function formatPercentage(decimal) {
    return `${Math.round(decimal * 100)}%`
  }
</script>

<div>
  <dt>{title}</dt>
  <dd>
    <Icon icon={condition.icon} group="weather" />
    <dl>
      <slot name="attributes"></slot>
      <Attribute label="Humidity" value={formatPercentage(model.humidity)} />
      <Attribute label="Rain Chance" value={formatPercentage(model.precipitationChance)} />
      <Attribute label="Wind" value={wind} />
    </dl>
  </dd>
</div>

<style>
  div {
    padding: 1rem 2rem;
  }

  dl {
    display: grid;
    grid-gap: 1rem;
  }

  dt {
    font-family: 'Alegreya';
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-align: center;
    text-transform: uppercase;
  }

  dd {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Alegreya SC';
    gap: 0.5rem;
    text-transform: lowercase;
  }
</style>
