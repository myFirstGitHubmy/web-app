function img(){
    let picture = document.getElementById('image');
    let count = Math.ceil(Math.random()*5);
    picture.src = "../" + count + ".jpg";
}