<script>

import location from '../store/location'
import settings from '../store/settings'



 
</script>

<h2>Home</h2>

{#if $location}
   {$location.latitude} {$location.longitude}
{/if}
<!--  kinda angular pipe -->
{$settings.colorScheme}