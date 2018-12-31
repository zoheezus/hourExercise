function calcOffsetTime(city, current_offset) {
    var date = new Date();

    var utc_offset = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() + utc_offset * current_offset);
    return city + date.toLocaleTimeString()
}

module.exports = {
    calcOffsetTime
}