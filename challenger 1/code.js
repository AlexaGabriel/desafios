var red = document.getElementsByClassName('red')
var blue = document.getElementsByClassName('blue')
let green = document.getElementsByClassName('green')

function redclicker(){
    document.body.style.backgroundColor = '#EB4325'; 
}
function blueclicker(){
    document.body.style.backgroundColor = '#098DEB';
}
function greenclicker(){
    document.body.style.backgroundColor = '#2BA46D';
}
function eraser(){
    document.body.style.backgroundColor = 'white';
}
function yellowclicker(){
    document.body.style.backgroundColor = 'yellow';
        let cor = window.prompt('digite o nome da cor em inglês')
        if(cor = 'orange'){
        document.body.style.backgroundColor = 'orange'
        document.body.innerHTML = 'parabéns você acertou'
        }else{
        document.body.innerHTML = 'que pena não é essa'
        }
}