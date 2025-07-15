const liElements = document.querySelectorAll(".center li");
const ul = document.querySelector(".center ul"); // <li>'lerin bulunduğu <ul>'yi seç
console.log(ul);

let jsframeworks = ["react","vue","angular","next"];
const buttonAdd = document.querySelector(".btnAdd");
const buttonDelete = document.querySelector(".btnDelete");
let index = 0;

buttonAdd.addEventListener("click",() =>{
    if (index < jsframeworks.length){
        const li = document.createElement("li");
        li.textContent = jsframeworks[index];
        ul.prepend(li);
        index++;
    }
    else{
        index = 0;
    }
})
let counter = 0;
buttonDelete.addEventListener("click",() =>{
    if (counter < jsframeworks.length){
        
        const li = ul.querySelector('li');
        ul.removeChild(li);
        counter++;
    }
    else{
        counter = 0;
    }

})
    liElements.forEach(element =>{
        element.addEventListener("click",event =>{
            console.log(event.target);
            event.stopPropagation(); // click eventi sadece liElements için çalışır. Bir üstü ul için click eventi çalışmaz.
        })
    })



    ul.addEventListener("click", event => {
        console.log(event.target);
    // Tıklanan elemanın <li> olduğundan emin ol
    if (event.target.tagName === "LI") {
        let temp = event.target; // Tıklanan <li> elemanı

        // Tıklanan <li>'yi sil
        temp.remove();

        // Üçüncü elemandan (index 2) önce ekle
        const children = ul.children;
        ul.insertBefore(temp, children[2]);
        
        // Tıklanan <li>'yi <ul>'nin başına ekle
        //ul.prepend(temp);
       
        // Tıklanan <li>'yi <ul>'nin sonuna ekle
        //ul.append(temp);

        // Tıklanan <li>'yi mavi yap
        temp.style.color = "blue";

        // Diğer tüm <li> elemanlarını varsayılan renge döndür
        Array.from(children).forEach(li => {
            if (li !== temp) { // Tıklanan elemanı hariç tut
                li.style.color = "#EAC8A6"; // Varsayılan renk
            }
        });
    }
});