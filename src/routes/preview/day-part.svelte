<script>
  import Attribute from './attribute.svelte'

  export let title
  export let model
  
  function formatPercentage(decimal) {
    return `${Math.round(decimal * 100)}%`
  }
</script>

<div>
  <dt>{title}</dt>
  <dd>
    {model.conditionCode}
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
</style>
