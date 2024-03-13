function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("item");
  if (c === "all") {
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "block";
      }
  } else {
      for (i = 0; i < x.length; i++) {
          if (x[i].classList.contains(c)) {
              x[i].style.display = "block";
          } else {
              x[i].style.display = "none";
          }
      }
  }
}
