
const SerialPort = require('serialport')
let serDevice = process.argv[2];
let action =process.argv[3];
/* Relay RS485 command */
// const onCmd = [0x01, 0x05, 0x00 ,0x00, 0xFF, 0x00, 0x8C, 0x3A]
// const offCmd=[0x01, 0x05, 0x00 ,0x00,0x00, 0x00, 0xCD, 0xCA]
const onCmd="ON\n";
const offCmd="OFF\n"
const port = new SerialPort(serDevice,{ baudRate:9600},function(err){
    if(err)
    {
        return console.log("Error open port:"+err.message)
    }
    console.log("Open port done")
    setTimeout(()=>{
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
                process.exit(1);
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
                process.exit(1);
            })
        
        }
    },2000)
    
    
});