

var question = [document.getElementById("form1"),document.getElementById("form2")];


function showHide() {
    var thing =document.getElementsByClassName("form");
    if (thing[0].style.display === "none") {
        thing[0].style.display = "block";
         thing[1].style.display = "none";
      } else {
        thing[0].style.display = "none";
        thing[1].style.display = "block";
    }
  }



  function button() {
    var foodName = document.getElementById('input_id').value;
    document.getElementById('new').innerHTML = foodName;
  }

  function button2() {
    var verdictName = document.getElementById('input_id2').value;
    document.getElementById('new2').innerHTML = verdictName;
  }
  /*
  var verdict = document.getElementById('new2');
    if (verdict == "hedge") {
        alert("hedge");
    }
    else: {
        alert("poo");
    }*/