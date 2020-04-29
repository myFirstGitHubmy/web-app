document.write("<h2>Найти минимальный элемент в последовательности.</h2>");
        var len = prompt("Длина последовательности?");
        var seq = "";
        let ch = "";
        var min = 0;
        for (let i=0; i<len;i++){
            
            seq =  prompt("Введите ряд чисел (" + i + ")");
            ch += seq + " ";
            if (i == 0) min = seq
            else if (min > seq)
            min = seq;
        }

        document.write("<b>Последовательность: </b>" + " " + ch);
        alert("Минимальное число: " + min);
        document.write("<h1>Минимальный элемент: "  + min + "</h1>");