const text = "i love programmingggg at lighthouse labs";

const countLettersIterative = (text) => {
    const arrayOfLetters = text.split('');
    const letters = {};

    for(let i = 0; i < arrayOfLetters.length; i ++){
        const currentLetter = arrayOfLetters[i];
        if(currentLetter in letters){
            letters[currentLetter] ++;
        }
        else{
            letters[currentLetter] = 1;
        }
    }
    return letters;
}

console.log(countLettersIterative(text));

const countLettersWithReduce = (text) => {
    const arrayOfLetters = text.split('');
    return arrayOfLetters.reduce((accumulator, currentLetter) => {
        if(currentLetter in accumulator){
            accumulator[currentLetter] ++;
        }
        else{
            accumulator[currentLetter] = 1;
        }
        return accumulator;
    }, {});
}

console.log(countLettersWithReduce(text));