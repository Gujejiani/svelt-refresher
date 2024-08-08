
<script>
  import { onDestroy } from 'svelte';
    import settings from '../store/settings'
    // let colorScheme ='light'
  

//    const unsubscribe=  settings.subscribe(value => {
//         console.log('settings Change ', value)
//         colorScheme = value.colorScheme
//     });


    // $: {
    //    settings.update((prev)=>{
    //           return {
    //             ...prev,
    //             colorScheme
    //           }
    //    })
    // }
    // onDestroy(unsubscribe)
</script>



<!-- {colorScheme} -->
<h2>Settings</h2>


<button on:click={()=>{
    console.log('haha')
    $settings.colorScheme = $settings.colorScheme === 'light' ? 'dark' : 'light'
}} >Toggle Color Schema</button>

<h2>{$settings.colorScheme}</h2>
<label>
    <input bind:group={$settings.colorScheme} type='radio' 
          name="colorScheme"
          value="dark"
    />
    Dark 
</label>


<label>
    <input bind:group={$settings.colorScheme} type='radio' 
          name="colorScheme"
          value="light"
    />
   Light 
</label>