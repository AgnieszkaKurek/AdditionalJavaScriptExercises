"use strict";

let scoops = 5;
while (scoops > 0) {
  //document.write("Another ice cream ball!!!");
  scoops = scoops - 1;
  if (scoops >= 5) {
    alert("Eat faster!!!The ice cream will melt!!!");
  }
  else if (scoops == 3) {
    alert("The ice cream is over!!!");
  }
  else if (scoops == 2) {
    alert("Two scoop of ice cream");
  }
  else if (scoops == 1) {
    alert("One scoop of ice cream");
  }
  else if (scoops == 0) {
    alert("End!!!No more ice cream !!!");
  }
  else {
    alert("We still have lots of ice cream");
  }
}
document.write("Life without ice cream would be terrible!!!");
