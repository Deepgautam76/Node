//this is the build in os module
const os=require('os')

//info about current user of this system
const user=os.userInfo()
console.log(user)

//method returns the system uptime 
console.log(`The system up time is :${os.uptime()} in second`)
console.log(`The system up time is :${Math.round(os.uptime()/60)}  minuts`)
console.log(`The system up time is :${Math.round(os.uptime()/3600)} hours`)
console.log(`The system up time is :${Math.round(os.uptime()/(3600*24))}  days`)


//this is the give the os information as well as memory info 
const currentOSInfo={
    name:os.type(),
    releaseVersion:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOSInfo)