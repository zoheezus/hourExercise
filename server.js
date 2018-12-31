const express = require('express');
const https = require('https');
const app = express();

var port = process.env.PORT || 8080;
var time = require('./time');

//initial loading vs new event??

app.get('/', function (req, res, next) {
    res.write('Hello, World!');
    res.write(time.calcOffsetTime('\nNew York:   ', '0'));
    res.write(time.calcOffsetTime('\nColorado:   ', '14'));
    res.write(time.calcOffsetTime('\nCalifornia: ', '9'));    
    res.end();
});

//delete when finished???
app.listen(port, () => {
    console.log('listening on port 8080');
});