/* Declare variables below to save the different sections (divs) of your story*/




let passion = document.querySelector(".theheartofpassion");
let ice = document.querySelector(".theheartofdarkness");
let optiononescreen =
    document.querySelector(".option-one-screen");
let storyopening =
    document.querySelector(".story-opening");
let optiontwoscreen =
    document.querySelector(".option-two-screen");

let boss1 =
    document.querySelector(".boss1");
let boss2 =
    document.querySelector(".boss2");

let optiontwoend =
    document.querySelector(".option-two-end");

let optiononeend = 
    document.querySelector(".option-one-end");

passion.onclick = function() {
    optiononescreen.style.display = "block";
    storyopening.style.display = "none";
    storyopening.style.display = "none";



};
ice.onclick = function() {
    optiontwoscreen.style.display = "block";
    storyopening.style.display = "none";
};

boss1.onclick = function() {
    optiononeend.style.display = "block";
    storyopening.style.display = "none";
    optiononescreen.style.display = "none";
};
boss2.onclick = function() {
    optiontwoend.style.display = "block";
    storyopening.style.display = "none";
    optiontwoscreen.style.display = "none";
};