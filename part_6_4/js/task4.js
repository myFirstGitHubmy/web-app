//onClick
//По нажатию на кнопку button_1 должно происходить закрытие окна документа.

function img(){
    let picture = document.getElementById('image');
    let count = Math.ceil(Math.random()*5);
    picture.src = "../" + count + ".jpg";
}