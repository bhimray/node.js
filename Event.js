// even emitter

const EventEmitter = require ('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{ // even listener
    console.log(`data received`)

})

customEmitter.emit('response') // evnt respose (the argument in "on" and "emit" has to be same)
// emit execute the event and wait for response argument

//Event might be used in any built-in modules that 
// you might not see directly......
