<script>
  export let title
</script>

<h1>{title}</h1>

<style>
  h1 {
    align-items: center;
    background: var(--accent);
    color: #fff;
    display: inline-flex;
    filter: drop-shadow(0 0.4rem 0 rgba(0, 0, 0, 0.15));
    font-size: 1.6rem;
    font-weight: bold;
    height: 3rem;
    justify-content: center;
    letter-spacing: 0.35em;
    margin: 2rem auto 1rem;
    position: relative;
    text-transform: uppercase;
    width: 25rem;
  }

  h1::before,
  h1::after {
    border-color: var(--accent);
    border-style: solid;
    border-width: 1.5rem 1rem;
    content: '';
    display: block;
    height: 0;
    position: absolute;
    width: 0;
  }

  h1::before {
    border-left-color: transparent;
    left: -1rem;
  }

  h1::after {
    border-right-color: transparent;
    right: -1rem;
  }
</style>
