function calcOffsetTime(city, value) {
    var date = new Date();
    
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset() * value);
    console.log(city + date.toLocaleTimeString());
    return city + date.toLocaleTimeString();
}

module.exports = {
    calcOffsetTime
}
