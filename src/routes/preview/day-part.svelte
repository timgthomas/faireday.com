<script>
  import Attribute from './attribute.svelte'
  import Icon from './icon.svelte'
  import humanizeConditionCode from '$lib/utils/humanize-condition-code'

  export let title
  export let model
  export let isDay = false
  
  $: condition = humanizeConditionCode(model.conditionCode, isDay)
  
  function formatPercentage(decimal) {
    return `${Math.round(decimal * 100)}%`
  }
</script>

<div>
  <dt>{title}</dt>
  <dd>
    <Icon icon={condition.icon} group="weather" />
    <dl>
      <Attribute label="Humidity" value={formatPercentage(model.humidity)} />
      <Attribute label="Rain Chance" value={formatPercentage(model.precipitationChance)} />
      <Attribute label="Wind">
        {model.windDirection} {model.windSpeed}
      </Attribute>
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
    gap: 1rem;
  }
</style>
