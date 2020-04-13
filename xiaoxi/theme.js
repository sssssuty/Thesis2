$( function() {
    　for (var i=0; i<12; i++){
      var x = document.querySelectorAll("#draggable");
      $(x[i]).draggable({ axis: 'x' });
      $(x[i]).draggable('option', 'axis', 'x');

        window.scrollBy(100, 100);
  console.log("AApageXOffset: " + window.pageXOffset + ", pageYOffset: " + window.pageYOffset);
    }
  } );

  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < 12; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }