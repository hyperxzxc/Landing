let arrdates = ["30 сентября",
    "16 июля",
    "29 июня",
    "17 июня",
    "30 мая"];
let arrhex = ["first_hex",
    "second_hex",
    "third_hex_text",
    "fourth_hex",
    "fifth_hex",]

let start = arrdates[0];
let end = arrdates[4];

document.getElementById(arrhex[0]).textContent = arrdates[0];
document.getElementById(arrhex[1]).textContent = arrdates[1];
document.getElementById(arrhex[2]).textContent = arrdates[2];
document.getElementById(arrhex[3]).textContent = arrdates[3];
document.getElementById(arrhex[4]).textContent = arrdates[4];


var elem = document.getElementById('scroll');

if (elem.addEventListener) {
    if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
    } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
    }
} else { // IE8-
    elem.attachEvent("onmousewheel", onWheel);
}


// Это решение предусматривает поддержку IE8-
function onWheel(e) {
    e = e || window.event;

    // deltaY, detail содержат пиксели
    // wheelDelta не дает возможность узнать количество пикселей
    // onwheel || MozMousePixelScroll || onmousewheel
    var delta = e.deltaY || e.detail || e.wheelDelta;


    let middlehex = document.getElementById(arrhex[2]).textContent;
    if (middlehex !== start){

        if (delta == 100){ //наверх
        let arr = rigntShiftArrByOne(arrdates);

        arrdates = arr;
        document.getElementById(arrhex[0]).textContent = arrdates[0];
        document.getElementById(arrhex[1]).textContent = arrdates[1];
        document.getElementById(arrhex[2]).textContent = arrdates[2];
        document.getElementById(arrhex[3]).textContent = arrdates[3];
        document.getElementById(arrhex[4]).textContent = arrdates[4];
    }
    }
    if ( middlehex !== end){
    if (delta == -100){ //наверх
        let arr = leftShiftArrByOne(arrdates);

        arrdates = arr;
        document.getElementById(arrhex[0]).textContent = arrdates[0];
        document.getElementById(arrhex[1]).textContent = arrdates[1];
        document.getElementById(arrhex[2]).textContent = arrdates[2];
        document.getElementById(arrhex[3]).textContent = arrdates[3];
        document.getElementById(arrhex[4]).textContent = arrdates[4];
    }
    }

}

function rigntShiftArrByOne(arr){
    return [].concat(arr.slice(-1),arr.slice(0,-1))
}

function leftShiftArrByOne(arr){
    return [].concat(arr.slice(1,5),arr.slice(0,1))
}
