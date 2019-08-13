var mqtt = require("mqtt");
var client = mqtt.connect('mqtt://192.168.137.1:1883');


client.on("connect", () => {
    client.publish('test topic', 'hello mqtt');
    console.log('Message sent');
})