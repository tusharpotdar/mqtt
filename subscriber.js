var mqtt = require('mqtt');
var client = mqtt.connect("mqtt://192.168.137.1:1883");

client.on('connect', () => {
    client.subscribe('test topic');
})

client.on('message', (topic, message) => {
    console.log(message.toString());
})