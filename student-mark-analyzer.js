
 function analyzeMarks(markObj){

    let total = 0;
    let num = 0;
    let highestMark = -Infinity;
    let lowestMark = Infinity;  
    let highestSub = null;
    let lowestSub = null;

    for(let subject in markObj){
        let mark = markObj[subject];
        total += mark;
        num++;
        if(mark > highestMark){
            highestMark = mark;
            highestSub = subject;
        }
        if(mark < lowestMark){
            lowestMark = mark;
            lowestSub = subject
        }
    }

    let average = total/num;
    console.log("Highest Sub ->", highestSub);
    console.log("Highest Mark ->" , highestMark);
    console.log("Lowesr Sub ->", lowestSub);
    console.log("Lowesr Mark ->", lowestMark);
    
    
    console.log("Total ->" , total);
    console.log("Average ->" , average);
    
    return{
        total,
        average,
        highestSub,
        highestMark,
        lowestSub,
        lowestMark,

    }
 }

 let a = analyzeMarks({math:90, phy:95, chem:94, bangla:87});
 console.log(a);
 