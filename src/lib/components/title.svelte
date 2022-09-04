<script>
  export let title
</script>

<nav role="banner">
  <h1>
    <span class="subtitle">Faire Day weather presents</span>
    <span class="title">{title}</span>
  </h1>
</nav>

<style>
  nav {
    align-items: center;
    background: var(--accent);
    display: flex;
    flex-direction: column;
    height: 6rem;
    justify-content: center;
    line-height: 1;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  
    nav::after {
      background: url('/crenellation.png');
      background-position: top center;
      background-size: contain;
      content: '';
      height: 2.4rem;
      position: absolute;
      top: 100%;
      width: 100%;
    }
  
  span {
    display: block;
    text-align: center;
  }
  
    span.subtitle {
      font-size: 1.4rem;
      font-weight: 500;
      opacity: 0.5;
    }
    
    span.title {
      font-size: 2rem;
      font-weight: 500;
    }
  
  .subtitle {
    font-family: 'Alegreya SC';
    text-transform: lowercase;
  }
</style>