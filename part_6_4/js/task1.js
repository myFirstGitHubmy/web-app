document.write("<h2>Сколько раз в последовательности встречается заданное число?</h2>");
        var len = prompt("Длина последовательности?");
        var seq = "";
        let ch = "";
        let countEnterNumbInStr = 0;
        let numb = prompt("Заданное число?");
        for (let i=0; i<len;i++){
            
            seq =  prompt("Введите ряд чисел (" + i + ")");
            ch += seq + " ";
            if (seq == numb)
            countEnterNumbInStr++;
        }

        document.write("<b>Последовательность: </b>" + " " + ch);
        alert("Количество вхождений числа " + numb + ": " + countEnterNumbInStr);
        document.write("<h1>Количество вхождений числа (" + numb + ") в поледовательности: "  + countEnterNumbInStr + "</h1>");