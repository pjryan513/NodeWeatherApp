const request = require('request');
// The 'yargs' module allows for command line parameter access in node scripts
// Double-quote args with a space ("San Antonio")
const argv = require('yargs').argv;
// Think we can all use one key..... (let's hope!)
const apiKey = '3907911101b608e51681ed06ab597094';
const city = argv.c || 'portland';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    const weather = JSON.parse(body)

    const message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});