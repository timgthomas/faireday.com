<script>
  export let icon
  export let group = ''
  
  $: path = () => {
    const pathSegments = [group, icon].filter(Boolean)
    return `/${pathSegments.join('/')}.png`
  }
</script>

<i role="presentation" style="--path: url('{path()}')"></i>

<style>
  i {
    background: currentColor;
    mask-image: var(--path);
    mask-size: contain;
    display: block;
    height: 4rem;
    width: 4rem;
  }
</style>