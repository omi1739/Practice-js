
 function wordsCounter(sentence){
    let words = sentence.split(" ");

    let wordsCount = {};

   
    for(let word of words){
          word = word.toLowerCase();
        if(wordsCount.hasOwnProperty(word)){
            wordsCount[word]++;
        }
        else{
            wordsCount[word] = 1;
        }
    }

    return wordsCount;
 }

 let a = wordsCounter('I love js and coding in js cause js is fun and JS is very cool');
 console.log(a);
 