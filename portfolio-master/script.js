document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
} 

const typedtextspan = document.querySelector(".typed-text");
const cursorspan = document.querySelector(".cursor");


const textarray = ["DEVELOPER.", "DESIGNER.", "FREELANCER.", "VITOR HUGO."];
const typingdelay = 150;
const erasingdelay = 50;
const newtextdelay = 1000;
let textarrayindex = 0;
let charindex = 0;
function type() {
    if(charindex < textarray[textarrayindex].length) {
        if(!cursorspan.classList.contains("typing")) cursorspan.classList.add("typing");
        typedtextspan.textContent += textarray[textarrayindex].charAt(charindex);
        charindex++;
        setTimeout( type, typingdelay);
    }
    else{
        cursorspan.classList.remove("typing");
        setTimeout(erase, newtextdelay);
        
    }
}
function erase() {
    if(charindex > 0) {
        if(!cursorspan.classList.contains("typing")) cursorspan.classList.add("typing");
        typedtextspan.textContent = textarray[textarrayindex].substring(0,charindex-1);
        charindex--;
        setTimeout(erase, erasingdelay);
    }
    else {
        cursorspan.classList.remove("typing");
        textarrayindex++;
        if(textarrayindex>=textarray.length) textarrayindex=0;
        setTimeout(type, typingdelay + 1100);  
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textarray.length) setTimeout(type, newtextdelay + 250);
});

