
function showHide() {
    var thing = document.getElementById("form1");
    var thing2 = document.getElementById("form2");
    if (thing.style.display === "none") {
      thing.style.display = "block";
       thing2.style.display = "none";
    } else {
      thing.style.display = "none";
      thing2.style.display = "block";
    }
  }

  var foodA = document.getElementsById('input_id1').value;
  var foodB = document.getElementsById('input_id2').value;
  var foodC = document.getElementsById('input_id3').value;
  var foodD = document.getElementsById('input_id4').value;

  function button() {
    var foodName = foodA.concat(foodB,foodC,foodD)
    document.getElementById('new').innerHTML = foodName;
  }

  function button2() {
    var verdictName = document.getElementById('input_id2.1').value;
    document.getElementById('new2').innerHTML = verdictName;
  }