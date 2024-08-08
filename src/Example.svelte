<script>
  import { onMount } from 'svelte';


import Home from './pages/home.svelte';
import Settings from './pages/settings.svelte';

// import settings from './store/settings'
let page

function onRouteChange(){
   const path = window.location.hash.slice(1)
   if(path ==='/'){
         page = 'home'
   }else if(path === '/settings'){
         page = 'settings'
    }else{
        page = '/'
    }
}
onMount(onRouteChange);
</script>


<svelte:window on:hashchange={onRouteChange}  />
<nav>
        <a href="#/">home</a>
        <a href="#/settings">Settings</a>
        
</nav>



<!-- <svelte:head >
{ #if $settings.colorScheme === 'dark'}

<style>
    :root {
        --background-color: #1d1d1d;
        --color: #fff;
    }
</style>
{:else}
<style>
    :root {
        --background-color: light;
        --color: #000;
    }
</style>
{/if}


</svelte:head> -->

{#if page === 'home'}
    <Home />
{:else if page === 'settings'}
    <Settings />
{/if}

<style></style>










<!-- <script>
// import  longpress from './actions/longpress.action'

// let showButton = true;
// let duration = 10000;
</script> -->




<!-- <label>
    <input type='range' bind:value={duration} min='1000' max='4000' step='100' />
    {duration}ms
</label>


{#if showButton}
    <button  style="color: #fff; background: green" use:longpress={{duration}}
    on:longpress={()=>{
        alert('Long press event fired')
    }}
    >Click me</button>
{/if} -->

<!-- <label> <input type="checkbox" bind:checked={showButton} /> Toggle</label> -->

