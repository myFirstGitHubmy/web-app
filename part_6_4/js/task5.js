//Написать скрипт, который выполнял бы следующее: пользователь получает запрос: 
//"Сколько раз пожелать вам доброго вечера?". 
//В конце программа должна написать "Добрый вечер" столько раз, сколько ее просили.

let countGoodEvening = prompt("Сколько раз хотите, пожелать себе 'Добрый вечер'?");
let goodEveningPrint = "Добрый вечер";

for (let count = 0; count < countGoodEvening; count++){
    document.write("<h2>" + goodEveningPrint + "</h2>");
}