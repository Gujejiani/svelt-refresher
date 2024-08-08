import { writable} from 'svelte/store'



const settings = writable({
    colorScheme: 'light',
    language: 'en',
    fontSize: 12,
    
},
() =>{
     console.log('from 0 to 1, settings store initialized someone is listening') 
     
     
     return () => {
            console.log('from 1 to 0, settings store uninitialized no one is listening')
     }
}
)


export default settings