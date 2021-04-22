
let day1 = document.getElementById("day")
let date1 = document.getElementById("date");
let date2 = new Date();
let day2 = date2.getDay();

let d1 = " ";
let sdate = date2.toLocaleDateString();
console.log(sdate)


switch (day2) {
  case 0:
    d1 = "Sunday";
    break;
  case 1:
    d1 = "Monday";
    break;
  case 2:
    d1 = "Tuesday";
    break;
  case 3:
    d1 = "Wednesday";
    break;
  case 4:
    d1 = "Thursday";

    break;
  case 5:
    d1 = "Friday";
    break;
  case 6:
    d1 = "Saturday";
    break;
}
console.log()
day1.innerHTML = d1;
date1.innerHTML = sdate