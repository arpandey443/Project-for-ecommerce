var Mainimg= document.getElementById('Mainimg');

var smalling = document.getElementsByClassName('small-img');

smalling[0].oneclick = function () {
    Mainimg.src = smalling[0].src;
}
smalling[1].oneclick = function () {
    Mainimg.src = smalling[2].src;
}
smalling[2].oneclick = function () {
    Mainimg.src = smalling[2].src;
}
smalling[3].oneclick = function () {
    Mainimg.src = smalling[3].src;
}