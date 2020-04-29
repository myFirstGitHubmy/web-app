
var now = new Date(2020, 0, 1);
var nn = new Date();
var qq = nn.getTime() - now.getTime();
alert("С нового года прошло " + Math.floor(qq/(1000*60*60*24)) + " (дня/дней)");
