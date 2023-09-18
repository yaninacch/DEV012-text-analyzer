const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim().split(/\s+/).filter(tx => isNaN(tx)).length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim().split("").filter(tx => !/[.,:!?]/.test(tx)
    ).length;
    //return text.trim().split("").filter(tx => tx !=" " && tx !="." && tx !="," &&  tx!=";" && tx != ":" && tx != "?" && tx != "!" && tx != "¡" && tx != "¿").length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    let arrWords = text.trim().split(/\s+/).filter(tx => isNaN(tx));
    let sumWords = 0;
    let average = 0;


    if(arrWords.length === 0 ){
      return 0;
    }

    for (let i = 0; i < arrWords.length; i++) {
      const word = arrWords[i];
      sumWords =  sumWords + Number(word.length); 
    }

    average = sumWords / arrWords.length;

    return average;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    return text.trim().split("").filter(tx => !isNaN(tx)).length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let arrNum = text.split("").filter(tx => !isNaN(tx));
    
    let sum = 0;

    for (let i = 0; i < arrNum.length; i++) {
      const num = arrNum[i];
      sum = sum + Number(num);
    }
    return sum;
  },
};

export default analyzer;
