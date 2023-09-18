import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

let userInput = document.getElementsByName('user-input')[0];
let wordCountLabel  = document.getElementsByTagName('li')[0];
let characterCountLabel = document.getElementsByTagName('li')[1];
let charecterNoSpaceCount = document.getElementsByTagName('li')[2];
let numberCountLabel = document.getElementsByTagName('li')[3];
let numberSumLabel = document.getElementsByTagName('li')[4];
let wordLengthAverage = document.getElementsByTagName('li')[5];
let resetButton = document.getElementById('reset-buttom');



userInput.addEventListener("input", (event) => {
    let text = event.target.value;

    wordCountLabel.innerHTML = 'Recuento de Palabras: ' + analyzer.getWordCount(text);
    characterCountLabel.innerHTML = 'Recuento de Caracteres: ' + analyzer.getCharacterCount(text);
    charecterNoSpaceCount.innerHTML = 'Recuento de Caracteres Sin Espacio: ' + analyzer.getCharacterCountExcludingSpaces(text);
    numberCountLabel.innerHTML = 'Recuento de Números: ' + analyzer.getNumberCount(text);
    numberSumLabel.innerHTML = 'Suma Total de Números: ' + analyzer.getNumberSum(text);
    wordLengthAverage.innerHTML = 'Longitud Promedio de Palabras: ' + analyzer.getAverageWordLength(text);
    
});

resetButton.addEventListener("click",function(e){
    e.preventDefault();
    location.reload();
})