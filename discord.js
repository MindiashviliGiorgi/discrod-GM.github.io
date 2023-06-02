const sectionOne = document.querySelector(".section-1-main");
const sectionTwo = document.querySelector(".section-2-main");
const sectionThree = document.querySelector(".section-3-main");
const sectionFour = document.querySelector(".section-4-main");

let calcScrollValue = () => {
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    console.log(scrollValue)
    if(scrollValue > 2){
        sectionOne.classList.add("go");

    }else {
        sectionOne.classList.remove("go");
    }
    if(scrollValue > 19) {
        sectionTwo.classList.add("go")
    }else {
        sectionTwo.classList.remove("go")
    }
    if(scrollValue > 34) {
        sectionThree.classList.add("go")
    }else {
        sectionThree.classList.remove("go")
    }
    if(scrollValue > 53) {
        sectionFour.classList.add("go")
    }else {
        sectionFour.classList.remove("go")
    }
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// gio for ciklit unda gadameara sectionebze da imis indexebit gameketebina 
// elxa mivxvdi :D :D 