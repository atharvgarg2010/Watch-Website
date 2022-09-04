let Time;
let Dates;
var MainTime;
let days;
let Days;
setInterval(() => {
a = new Date();
days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
Time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
Dates = a.getDate() + '-' + a.getMonth() + '-' + a.getFullYear();
Days = '' + days[a.getDay()] + ''; 
MainTime = Time + " <br> on " + Days + ' ' + Dates;
document.getElementById('Clock').innerHTML = MainTime;
}, 1000);
setInterval(() => {
    let b = new Date()
    days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    Days = '' + days[a.getDay()] + ''; 
    // Time = a.getHours()-9 + ':' + a.getMinutes() - 31 + ':' + a.getSeconds()
    document.getElementById('OtherTimes').innerHTML = "Canada :- " + Days + Time; 
}, 1000);
