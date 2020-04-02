

//importing the mqtt library  and then setting that to the variable mqtt
var mqtt = require('mqtt');

//storing the mqtt client adress in the mqtt_client variable 

var mqqt_client=" mqtt:192.168.xx.xxx"

//creating the instance of the mqtt protocol to the variale mqtt



var client  = mqtt.connect();

// printing the status of the client with the server 
console.log("connected flag  "+client.connected);


// creating the call back with the on connect 
client.on("connect",function(){	

   console.log("connected  "+client.connected);

   //publishing the topic with the message of the hello world 
    client.publish('pc', 'Hello mqtt')
    // subscribing the topic of the venkat 
    
   client.subscribe("raspi");

})

//creating the call back for the on message receiving from the server 

client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});


