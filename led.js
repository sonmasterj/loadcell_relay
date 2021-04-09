const SerialPort = require('serialport')
let serDevice = process.argv[2];
const onCmd = [0x01, 0x05, 0x00 ,0x00, 0xFF, 0x00, 0x8C, 0x3A]
const offCmd=[0x01, 0x05, 0x00 ,0x00,0x00, 0x00, 0xCD, 0xCA]
let action =process.argv[3];
console.log("Start process")
const port = new SerialPort(serDevice,{ baudRate:9600},function(err){
    if(err)
    {
        return console.log("Error open port:"+err.message)
    }
});
if(action==="ON")
{
    port.write(onCmd,function(err){
        if(err)
        {
            console.log("Error write:",err.message)
        }
        else{
            console.log("write successfully")
        }
    })
}
else if(action==="OFF")
{
    port.write(offCmd,function(err){
        if(err)
        {
            console.log("Error write:",err.message)
        }
        else{
            console.log("write successfully")
        }
    })
}
console.log("End Process")