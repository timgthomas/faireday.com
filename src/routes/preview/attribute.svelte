<script>
  export let label
  export let value = null
</script>

<div>
  <dt>{label}</dt>
  <dd><slot>{value}</slot></dd>
</div>

<style>
  div {
    font-family: 'Alegreya SC';
    line-height: 1;
    text-align: center;
    text-transform: lowercase;
  }

  dt {
    color: var(--foreground-secondary);
    font-size: 1.4rem;
    font-weight: 500;
  }
  
  dd {
    font-size: 2.2rem;
  }
</style>
