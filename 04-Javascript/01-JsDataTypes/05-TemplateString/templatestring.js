const framework1 = "Angular";
const framework2 = "React";
const framework3 = "Vue";

let sonuc = "BCG öğreniyor:" + " " + framework1 + " " + framework2 + " " + framework3;
console.log(sonuc);
// backtick
let sonuc1 = `Template Literals ile BCG öğreniyor: ${framework1} js ${framework2} js ${framework3} js `;
console.log(sonuc1);

let html = `
<h1>${framework1}</h1>
<h2>${framework2}</h2>
<h3>${framework3}</h3>
`;
console.log(html);