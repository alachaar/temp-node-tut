const EventEmitter=require('events') //classe
const customEmitter= new EventEmitter() //instance de la classe EventEmitter


// on and emit methods
// keep track of the order
// additional arguments
// built-in module utilize it

customEmitter.on('response' , (name,id)=>{   //customEmitter.on(event_name:string , callback-function) , on : listen to the event
    console.log(`data received user : ${name} with id : ${id}`)
})

customEmitter.on('response' , ()=>{   //we can listen to the same event and do different things
    console.log('some other logic here')
})

customEmitter.emit('response','alaa',20)  //customEmitter.emit(event_name:string , parameters that are mentioned in the callback function of the listening event)