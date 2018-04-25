//declare function
function fctHello() {
    //declare variable
    var str = 'Hello World';
    console.log(typeof(str));
    //use variable in basic javascript function
    alert(str);
}

//wait for dom loaded
document.addEventListener("DOMContentLoaded", functon(vent) {
    //log in console
    console.log("DOM loaded");
    //add event to button
    var btHello = document.getElementById("btHello");
    btHello.addEventListener("click", fctHello);
});