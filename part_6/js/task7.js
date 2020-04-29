
let inputs = document.querySelectorAll('input[data-rule]');
console.log(inputs);

for (let input of inputs){
    input.addEventListener('blur', function(){
        let rule = this.dataset.rule;
        console.log(rule);
    });
}
// alert("fdgg")