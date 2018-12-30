/*
To do:
 -find out why displayfood and append food are being weird
 -continue brachaEval
 -start typing corresponding HTML inputs for next questions
 -refine map for which questions go to where
 -figure out how to get numbered food/bracha from array for final answer
 -Formatting
 */
$(document).ready(function(){
    $("#qu").click(function(){
    $("h1").toggle();
    });
    $("#addBracha").click(displayBracha).click(appendBracha).click(displayFood).click(appendFood)
    $("#submit").click(brachaEval);
});

function displayFood() {
    var x = document.getElementById("food1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
     text += x.elements[i].value;
    }
    document.getElementById("foodlist").innerHTML += text + ", ";
    document.getElementById("foodhiddenlist").innerHTML = text;
}

function displayBracha() {
    var x = document.getElementById("bracha1");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
     text += x.elements[i].value;
    }
    document.getElementById("brachalist").innerHTML += text + ", ";
    document.getElementById("brachahiddenlist").innerHTML = text;
}

var bracha = [];
var food = [];

function appendBracha() {
    var y = document.getElementById("brachahiddenlist").innerHTML;
    bracha.push(y);
    //alert(bracha);
}

function appendFood() {
    var y = document.getElementById("foodhiddenlist").innerHTML;
    food.push(y);
    //alert(food);
}

function brachaEval() {
    if (document.getElementById("brachalist").innerHTML.includes("Hamotzi")) {
        alert("YAY")
    }
    else {
        alert(":(")
    }
}