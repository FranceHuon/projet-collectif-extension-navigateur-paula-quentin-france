// Declaration of variables of the supabase api to extract the data

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxZnNqdWZzdXV0bW52endpbnVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDE5NTgsImV4cCI6MjAwOTQ3Nzk1OH0.-rasUQus-Zlolv_Q1URFeR8XzMi-isSk5wC7xxCgbNc";
const supaBaseURL = "https://aqfsjufsuutmnvzwinus.supabase.co/rest/v1/birthday";

// creation of a table with the months in a year

let monthOfTheYear = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

// variable to have the current month in number

let monthActual = new Date().getMonth() + 1;

//Enter the asynchronous function to extract data from the API

async function getBirthdays() {
  const response = await fetch(supaBaseURL, {
    headers: {
      apiKey: apiKey,
      autorization: "bearer " + apiKey,
    },
  });
  const data = await response.json(); // constant data includes API data

  // function that extracts the birth month of the person for the index "x"

  function getBirthdayMonth(x) {
    let dateOfBirthday = new Date(data[x]["birthday"]);
    let monthOfBirthday = dateOfBirthday.getMonth() + 1;
    return monthOfBirthday;
  }

  //loop that compares the birthday month for the index "i" and the current month "monthActual"
  let birthdayDiv;
  for (let i = 0; i < data.length; i++) {
    if (getBirthdayMonth(i) === monthActual) {
      birthdayDiv = document.createElement("div"); // Create div
      document.querySelector("#birthday").appendChild(birthdayDiv); //indicates that the div is the child of the div "birthday"
      birthdayDiv.innerHTML =
        "C'est l'anniversaire de " + data[i]["name"] + data[i]["birthday"]; //we write in the div the text with the values that we get out of the loop
    }
  }
}
getBirthdays();
