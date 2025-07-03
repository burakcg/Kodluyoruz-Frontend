const score = [10, 15, 22, 13, 55, 99, 64];
let temp  = null;
let newArray = []
let sum = 0;
for(counter=0; counter <= score.length; counter++){
    if(temp == null || score[counter] >= temp ){
        temp = score[counter];
        newArray.push(temp);
        sum += temp;
        if(temp === 99){
            break;
        }
    }
    else{
        continue;
    }
}
console.log(score);
console.log(newArray);
console.log(`listedeki en büyük sayı:${temp}`);

let avgScore = Number(sum/newArray.length);
let stats;

if(avgScore > 50){
    stats = 'G';
}
else{
    stats = 'K';
}

switch(stats){
    case 'K':
    console.log("başarısız.");
    break;
    case 'G':
    console.log("başarılı");
    break;    
}