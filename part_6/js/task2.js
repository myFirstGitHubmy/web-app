var num = prompt("Введите число"),
 mas =num.toString().split("");
 document.write('Введенное число: ' + num);
 let temp = 0 ;
for (let i=0; i<mas.length; i++){
    if (i==0){
        temp = mas[0];
        mas[0] = mas[mas.length-1];
    }
    if (i == mas.length-1){
        mas[mas.length-1] = temp;
    }
}
var newNum = mas.join('');
alert(newNum);
document.write(". Новое число: " + newNum);