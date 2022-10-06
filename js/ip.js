function myAkanNameCalculator() {
  var birthDateInput = prompt("Enter your birthday (YYYY-MM-DD) : "); //PROMPTS THE USER FOR THEIR BIRTH DATES USING THE HINTED FORMAT (ENSURE THEERE IS A PLACEHOLDER IN YOUR INPUT FORM WITH DATE FORMAT)
  var genderInput = prompt("Enter your gender M/F : ").toUpperCase(); //TURNS THE USER INPUT INTO UPPER CASE IN CASE ITS LOWER CASE

  var birthDateDetails = new Date(birthDateInput); //CREATES A NEW DATE OBJECT USING THE DETAILS INPUT BY THE USER STARTING WIT YEAR MONTH DATE HOUR MINUTE etc
  var birthDay = birthDateDetails.getDay(); //THE getDay() METHOD PICKS THE DAY FROM THE DATE IN FORM OF A NUMBER FROM 0-6 SUN-SAT

  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //ARRAY OF FEMALE AKAN NAMES
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",]; //ARRAY OF MALE AKAN NAMES

  var fullGender;

  if (genderInput === "M" || genderInput === "F") {
    if (genderInput === "M") {
      fullGender = "Male";
      outPut =
        "Your Akan name is " +
        maleNames[birthDay] +
        " because you are a " +
        fullGender +
        " born on a " +
        daysOfWeek[birthDay] +
        "!";
      console.log(outPut);
    } else {
      fullGender = "Female";
      outPut =
        "Your Akan name is " +
        femaleNames[birthDay] +
        " because you are a " +
        fullGender +
        " born on a " +
        daysOfWeek[birthDay] +
        "!";
      console.log(outPut);
    }
  } else {
    console.log("Invalid gender. Reply with M for Male and F for Female");
  }
}
alert(myAkanNameCalculator());
