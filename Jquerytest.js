$(document).ready(function(){
    $("#qu").click(function(){
    $("h1").toggle();
    });
    $("#submit").click(displayBracha).click(displayFood).click(appendBracha).click(appendFood)
});
/*
function displayFood() {
    var x = document.getElementById("food1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
     text += x.elements[i].value + ",";
    }
    document.getElementById("foodlist").innerHTML += text;
    document.getElementById("foodhiddenlist").innerHTML = text; //this line doesn't work
}
*/
function displayBracha() {
    var x = document.getElementById("bracha1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
     text += x.elements[i].value + ",";
    }
    document.getElementById("brachalist").innerHTML += text;
    document.getElementById("brachahiddenlist").innerHTML = text;
}

var bracha = [];
var food = [];

//i somehow managed to break this. the alert isn't working, idk if its adding it to the list
function appendBracha() {
var y = document.getElementById("brachahiddenlist").innerHTML;
bracha.push(y);
alert(bracha);
}/*
function appendFood() {
    var y = document.getElementById("foodhiddenlist").innerHTML;
    food.push(y);
   // alert(food);
}

function brachaEval() {

}
*/