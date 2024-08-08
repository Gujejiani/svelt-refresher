




export default function longpress(node, options){

 let timer;

  node.addEventListener('mousedown', handleMousedown);
  node.addEventListener('mouseup', handleMouseup);
   
    function handleMousedown(event){
        const {duration} = options;
      timer=  setTimeout(()=>{
            node.dispatchEvent(new CustomEvent('longpress'))
        }, duration)
    }
    function handleMouseup(event){
        clearTimeout(timer)
    }

    return {
        destroy(){
            clearTimeout(timer)
            node.removeEventListener('mousedown', handleMousedown);
            console.log('destroyed')

        },

        update(newOptions){
            options = newOptions
            console.log('updated', newOptions)
        }
    }
}