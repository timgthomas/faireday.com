<script>
  import Icon from '$lib/components/icon.svelte'
  import formatTemperature from '$lib/utils/format-temperature'
  import humanizeConditionCode from '$lib/utils/humanize-condition-code'

  export let title
  export let model

  $: condition = humanizeConditionCode(model.conditionCode, true)
</script>

<h1>{title}</h1>
<Icon icon={condition.icon} group="weather" />
<p class="max">{formatTemperature(model.temperatureMax)}</p>
<p class="min">{formatTemperature(model.temperatureMin)}</p>

<style>
  * {
    line-height: 1;
  }

  h1 {
    font-family: 'Alegreya';
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .max {
    font-size: 2.2rem;
    margin-top: 0.5rem;
  }

  .min {
    color: var(--foreground-secondary);
    font-size: 2rem;
    font-weight: 500;
  }
</style>