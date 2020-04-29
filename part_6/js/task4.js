//onClick
//По нажатию на кнопку button_1 должно происходить закрытие окна документа.

function clos(){
    var exit = confirm("Действительно ли вы хотите уйти со страницы?");
    if (exit) window.close();
}