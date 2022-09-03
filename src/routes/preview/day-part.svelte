<script>
  export let title
  export let model
</script>

<div>
  <dt>{title}</dt>
  <dd>
    {model.conditionCode}
    <dl>
      <dt>Humidity</dt>
      <dd>{model.humidity}</dd>
      <dt>Rain Chance</dt>
      <dd>{model.precipitationChance}</dd>
      <dt>Wind</dt>
      <dd>{model.windDirection} {model.windSpeed}</dd>
    </dl>
  </dd>
</div>

<style>
  div {
    padding: 1rem 2rem;
  }
</style>
