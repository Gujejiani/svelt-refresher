import { writable} from 'svelte/store'



const settings = writable({
    colorScheme: 'light',
    language: 'en',
    fontSize: 12
})


export default settings