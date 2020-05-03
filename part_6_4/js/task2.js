    var x;
    let n;

    document.write("<h2>Дано натуральное число n. Проверить, есть ли в записи числа три одинаковые цифры (n ≤ 9999).</h2>")
    
    while (true){
        if((n = String(prompt("Введите число"))).length > 4  ){
            n = String(prompt("Введите число"));
        }
        else{
            if (n.length < 3) 
                alert("Нет трех совпадений цифр");// Трёх повторов не встретилось.
            else
                for (x = 0; x < n.length; x++) {
                    if (n.split( n.substr(x, 1) ).length >= 4) {
                    document.write("<span>" +n.substr(x, 1));
                    document.write("</span>");
                    }
                }
                break;
        }        
    }
     
