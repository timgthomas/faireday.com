<script>
  import Social from '$lib/components/social.svelte'
</script>

<svelte:head>
  <script defer data-domain="faireday.com" src="https://plausible.io/js/plausible.js"></script>
  <style>
    body {
      justify-content: center;
    }
  </style>
</svelte:head>

<h1>Faire Day</h1>
<nav>
  <a href="/support">Support</a>
  <a href="/privacy">Privacy</a>
</nav>
<Social />
