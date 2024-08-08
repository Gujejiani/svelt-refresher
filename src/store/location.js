
import { readable } from "svelte/store";


const location = readable(null, (set)=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log('POSITION ', position)
            const {latitude, longitude} = position.coords;
            set({
                latitude,
                longitude
            })
        }, ()=>{
            set(null)
        })
    };

    return () => {
        console.log('from 1 to 0, location store uninitialized no one is listening')
        set(null)
    }
},

)

export default location