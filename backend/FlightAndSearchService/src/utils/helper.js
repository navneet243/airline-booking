function compareTime(timeString1, timeString2) {
  const dataTime1 = new Date(timeString1);
  const dateTime2 = new Date(timeString2);
  return dateTime2.getTime() > dataTime1.getTime();
}

module.exports = {  
    compareTime
}