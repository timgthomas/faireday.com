<script>
  export let url
</script>

<a class="apple-weather" href={url} target="_blank" rel="noopener noreferrer">
  Powered by <span>Apple Weather</span>
</a>

<style>
  a {
    align-items: center;
    color: var(--foreground-secondary);
    display: flex;
    flex-direction: column;
    font-family: 'Alegreya SC';
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    text-transform: lowercase;
  }

  a::after {
    background: currentColor;
    color: inherit;
    content: '';
    display: inline-block;
    height: 1.1rem;
    mask-image: url('/apple-weather.png');
    mask-repeat: no-repeat;
    mask-size: contain;
    margin-top: .2rem;
    text-align: center;
    text-decoration: none;
    text-transform: lowercase;
    width: 6rem;
  }
  
  span {
    font: 0 / 0 a;
  }
</style>