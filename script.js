document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


const typedtextspan = document.querySelector(".typed-text");
const cursorspan = document.querySelector(".cursor");


const textarray = ["DEVELOPER.", "DESIGNER.", "FREELANCER.", "VITOR HUGO."];
const typingdelay = 150;
const erasingdelay = 50;
const newtextdelay = 1000;
let textarrayindex = 0;
let charindex = 0;
function type() {
    if (charindex < textarray[textarrayindex].length) {
        if (!cursorspan.classList.contains("typing")) cursorspan.classList.add("typing");
        typedtextspan.textContent += textarray[textarrayindex].charAt(charindex);
        charindex++;
        setTimeout(type, typingdelay);
    }
    else {
        cursorspan.classList.remove("typing");
        setTimeout(erase, newtextdelay);

    }
}
function erase() {
    if (charindex > 0) {
        if (!cursorspan.classList.contains("typing")) cursorspan.classList.add("typing");
        typedtextspan.textContent = textarray[textarrayindex].substring(0, charindex - 1);
        charindex--;
        setTimeout(erase, erasingdelay);
    }
    else {
        cursorspan.classList.remove("typing");
        textarrayindex++;
        if (textarrayindex >= textarray.length) textarrayindex = 0;
        setTimeout(type, typingdelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textarray.length) setTimeout(type, newtextdelay + 250);
});

