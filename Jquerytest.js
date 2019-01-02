/*
To do:
 -start typing corresponding HTML inputs for next questions
 -write css for html of next qs
 -Formatting
 */
//buttons
$(document).ready(function() {
  
    showhide($("#step1"))

    $("#addBrachaButton").click(addFoodBracha);

    $("#brachaSubmitButton").click(brachaEval);

    $("#mezonotTypeButton").click(mezonotEval);

    $("#MezonotImportantButton").click(mostImportant);

    $("#foodSelectButton").click(chooseFav);

    $("#MajoritySelectButton").click(chooseMaj);

});

function showhide (show) {
    $(".Qs").hide();
    $(show).show();
};

var brachaNamesList = [];
var foodNamesList = [];

function addFoodBracha() {
    displayFood();
    displayBracha();
};

function displayFood() {
    updateLists("foodNameInput", "fooddisplay", foodNamesList);
};

function displayBracha() {
    updateLists("brachaDropdown", "brachadisplay", brachaNamesList);
};

// Updates the given list based on user input
function updateLists(inputIdName, displayParagraphIdName, namesList) {
    var inputVal = $('#' + inputIdName).val();
    namesList.push(inputVal);
    $('#' + displayParagraphIdName).text(namesList.join(", "));
};

function brachaEval() {
    if (brachaNamesList.includes("Hamotzi")) {
        answer("Hamotzi");
    }
    else if (brachaNamesList.includes("Unsure")) {
        showhide($("#donotproceed"));
    }
    else if (brachaNamesList.includes("Mezonot (BROWS)")) {
       showhide($("#step2a"))
    }
    else if (brachaNamesList.includes("Hagafen")||brachaNamesList.includes("Mezonot rice")||brachaNamesList.includes("Ha'etz")||brachaNamesList.includes("Ha'adama")||brachaNamesList.includes("Shehakol")) {
        brachaIsOther();
       // $('#step2b').show();
       showhide($("#step2b"))
    }
};

var mezonotTest = 2;

function mezonotEval() {
var checkedVal = $("input[name=MQ]:checked").val();
    if (checkedVal == "CT") {
        answer("Mezonot (BROWS)");
    }
    else if (checkedVal == "CS") {
        mezonotTest = 1
        brachaIsOther();
         showhide($("#step2b"))
    }
    else if (checkedVal == "NC") {
        showhide($("#step2a1"))
    }
    else if (checkedVal == "BA") {
        brachaIsOther();
        showhide($("#step2b"))
    }
};

function mostImportant() {
    var checkedVal = $("input[name=CSQ]:checked").val();

    if (checkedVal == "M") {
        answer("Mezonot (BROWS)");
    }
    else if (checkedVal == "NM") {
        mezonotTest = 1
        brachaIsOther();
        showhide($("#step2b"))
    }
}

//adds food to dropdown
function brachaIsOther() {

     var DD = document.getElementById("foodDropDown");
    for (i = 0; i <foodNamesList.length;i++){
        var option = document.createElement("option");
        option.text = foodNamesList[i];
        option.value = foodNamesList[i];

        if (brachaNamesList[i] != "Mezonot (BROWS)") {
            DD.add(option);
        }
            
    }
};

function populateMaj() {

      var DD = document.getElementById("foodDropDownMaj");

     for (i = 0; i <foodNamesList.length;i++){
         var option = document.createElement("option");
         option.text = foodNamesList[i];
         option.value = foodNamesList[i];
 
         if (brachaNamesList[i] != "Mezonot (BROWS)") {
             DD.add(option);
         }
             
     }
 };


function chooseFav() {
    choose('#foodDropDown',"#step3");
    if ($("#foodDropDown").val() == "Unsure") {
        populateMaj();
    }

};

function chooseMaj() {
    choose("#foodDropDownMaj","#idontknow");
};

function choose(dropdown,showed) {
    if ($(dropdown).val() == "Unsure") {
        showhide($(showed))
    }
    else {
       foodIndex =  foodNamesList.indexOf($(dropdown).val());
       blessing = brachaNamesList[foodIndex];
       answer(blessing);
    }
}
//tells user the answer
function answer(bracha) {
    showhide($("#brachaIs"))
    i1 = brachaNamesList.indexOf(bracha);
    var j = ". "
    var k = ". "

    if (mezonotTest == 1) {
       i2 = brachaNamesList.indexOf("Mezonot (BROWS)");
       var j = " and the " + foodNamesList[i2] + ". ";
       var k = " and " + brachaNamesList[i2] + ". ";
    }
   
    $("#brachaIs").text("your Ikkar is the " + foodNamesList[i1] + j + "Your bracha is " + brachaNamesList[i1] + k);
};
