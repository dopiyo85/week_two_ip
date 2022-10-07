var century, yearDigit, monthDigit, monthDay, dayOfWeek, dayValue;
//  century - is the century digits. For example 1989 has CC = 19
//  yearDigit - is the Year digits (1989 has YY = 89)
//  monthDigit -  is the Month
//  monthDay - is the Day of the month 
//  dayOfWeek - Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//  dayValue - the number that represent day of week in java eg Sunday is 0
const dayWeekNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// The days of the week
const maleAkanNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
// the male Akan Names as per days of the week
const femaleAkanNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  " Yaa",
  "Afua",
  "Ama",
];
// the female Akan Names as per days of the week
function validate() {
  var genders = document.getElementsByName("gender");
  if (
    document.myForm.year.value == "" ||
    document.myForm.year.value.length != 4 ||
    document.myForm.year.value > 2022 ||
    document.myForm.year.value <= 1900
  ) {
    alert("Please provide a valid year of birth! eg 2022");
    document.myForm.year.focus();
    return false;
  } 
  else if (
    document.myForm.month.value == "" ||
    isNaN(document.myForm.month.value) ||
    document.myForm.month.value.length != 2 ||
    document.myForm.month.value > 12 ||
    document.myForm.month.value <= 0
  ) {
    alert("Please provide your month of birth! between 1 and 12");
    document.myForm.month.focus();
    return false;
  } else if (
    document.myForm.date.value == "" ||
    isNaN(document.myForm.month.value) ||
    document.myForm.month.value.length != 2 ||
    document.myForm.date.value > 31 ||
    document.myForm.date.value <= 0
  ) {
    alert("Please provide a valid date that you were born in!");
    document.myForm.day.focus();
    return false;
  } else if (genders[0].checked == false && genders[1].checked == false) {
    alert("You must select male or female");
    return false;
  } else {
    return true;
  }
}

function calculateDayValue() {
  year = document.getElementById("year").value;
  century = parseInt(year.substring(0, 2));
  yearDigit = parseInt(year.substring(2, 4));
  monthDigit = parseInt(document.getElementById("month").value);
  dayOfWeek = parseInt(document.getElementById("date").value);
  dayValue= (century / 4 - 2 * century - 1 + (5 * yearDigit) / 4 + (26 * (monthDigit + 1)) / 10 + dayOfWeek) % 7;
  console.log(dayValue);
  return Math.floor(dayValue);
}

function getGender() {
  var genders = document.getElementsByName("gender");
  if (genders[0].checked == true) {
    var gender = "male";
  } else if (genders[1].checked == true) {
    var gender = "female";
  } else {
    return false;
  }
  switch (gender) {
    case "male":
      if (dayValue == 1) {
        alert(
          "You were born on " +
            dayWeekNames[0] +
            " and Your akan name is " +
            maleAkanNames[0] +
            "!"
        );
      } else if (dayValue == 2) {
        alert(
          "You were born on " +
            dayWeekNames[1] +
            " and Your akan name is " +
            maleAkanNames[1] +
            "!"
        );
      } else if (dayValue == 3) {
        alert(
          "You were born on " +
            dayWeekNames[2] +
            " and Your akan name is " +
            maleAkanNames[2] +
            "!"
        );
      } else if (dayValue == 4) {
        alert(
          "You were born on " +
            dayWeekNames[3] +
            " and Your akan name is " +
            maleAkanNames[3] +
            "!"
        );
      } else if (dayValue == 5) {
        alert(
          "You were born on " +
            dayWeekNames[4] +
            " and Your akan name is " +
            maleAkanNames[4] +
            "!"
        );
      } else if (dayValue == 6) {
        alert(
          "You were born on " +
            dayWeekNames[5] +
            " and Your akan name is " +
            maleAkanNames[5] +
            "!"
        );
      } else if (dayValue == -0) {
        alert(
          "You were born on " +
            dayWeekNames[6] +
            " and Your akan name is " +
            maleAkanNames[6] +
            "!"
        );
      }
      break;
    case "female":
      if (dayValue == 1) {
        alert(
          "You were born on " +
            dayWeekNames[0] +
            " and Your akan name is  " +
            femaleAkanNames[0] +
            "!"
        );
      } else if (dayValue == 2) {
        alert(
          "You were born on " +
            dayWeekNames[1] +
            " and Your akan name is " +
            femaleAkanNames[1] +
            "!"
        );
      } else if (dayValue == 3) {
        alert(
          "You were born on " +
            dayWeekNames[2] +
            " and Your akan name is " +
            femaleAkanNames[2] +
            "!"
        );
      } else if (dayValue == 4) {
        alert(
          "You were born on " +
            dayWeekNames[3] +
            " and Your akan name is " +
            femaleAkanNames[3] +
            "!"
        );
      } else if (dayValue == 5) {
        alert(
          "You were born on " +
            dayWeekNames[4] +
            " and Your akan name is " +
            femaleAkanNames[4] +
            "!"
        );
      } else if (dayValue == 6) {
        alert(
          "You were born on " +
            dayWeekNames[5] +
            " and Your akan name is " +
            femaleAkanNames[5] +
            "!"
        );
      } else if (dayValue == -0) {
        alert(
          "You were born on " +
            dayWeekNames[6] +
            " and Your akan name is " +
            femaleAkanNames[6] +
            "!"
        );
      }
      break;
    default:
  }
}
function findName() {
  dayValue = calculateDayValue();
  getGender();
}
alert