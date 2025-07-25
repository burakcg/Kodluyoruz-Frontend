const points = [33, 75, 55, 66, 67, 88 ,90];

const highPoint = points.find(point =>{  // koşulu sağlayan ilk değeri bulur
    return point > 70
});

console.log(highPoint);