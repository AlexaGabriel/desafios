function calcular(){
    let peso = document.getElementById("peso");
    let Altura = document.getElementById("Altura");
    const newLocal = "resposta";
    let resultDiv = document.getElementById(newLocal)

    let p = parseFloat(peso.value) 
    let a = parseFloat(Altura.value) / 100

    if (isNaN(p) || isNaN(a) || p <= 0 || a <= 0) {
        resultDiv.innerText = 'Por favor, insira valores válidos.';
        return;
    }
      
    let res = p / (a * a)
    var classification = '';

    if (res < 18.5) {
        classification = 'Abaixo do peso';
      } else if (res < 25) {
        classification = 'Peso normal';
      } else if (res < 30) {
        classification = 'Sobrepeso';
      } else {
        classification = 'Obesidade';
    }

    resultDiv.innerText = 'Seu IMC é ' + res.toFixed(2) + ' - ' + classification;

}