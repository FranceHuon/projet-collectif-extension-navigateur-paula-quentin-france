// Declaration of variables of the supabase api to extract the data

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxZnNqdWZzdXV0bW52endpbnVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDE5NTgsImV4cCI6MjAwOTQ3Nzk1OH0.-rasUQus-Zlolv_Q1URFeR8XzMi-isSk5wC7xxCgbNc";

const supaBaseURL = "https://aqfsjufsuutmnvzwinus.supabase.co/rest/v1/birthday";

// creation of a object with the months in a year

let monthOfTheYear = {
  1: "Janvier",
  2: "Février",
  3: "Mars",
  4: "Avril",
  5: "Mai",
  6: "Juin",
  7: "Juillet",
  8: "Août",
  9: "Septembre",
  10: "Octobre",
  11: "Novembre",
  12: "Décembre",
};

// Enter the asynchronous function to extract data from the API

async function getBirthdays() {
  const response = await fetch(supaBaseURL, {
    headers: {
      apiKey: apiKey,
      autorization: "bearer " + apiKey,
    },
  });
  const data = await response.json(); // constant data includes API data

  // variable to have the current month in number

  let monthActual = new Date().getMonth() + 1;

  // function that extracts the birth month of the person for the index "x"

  function getBirthdayMonth(x) {
    let dateOfBirthday = new Date(data[x]["birthday"]);
    let monthOfBirthday = dateOfBirthday.getMonth() + 1;
    return monthOfBirthday;
  }

  // loop that compares the birthday month for the index "i" and the current month "monthActual"

  function monthActualBirthday() {
    displayMonth(monthActual);
    let birthdayDiv;
    for (let i = 0; i < data.length; i++) {
      if (getBirthdayMonth(i) === monthActual) {
        birthdayDiv = document.createElement("div"); // Create div
        document.querySelector("#birthday").appendChild(birthdayDiv); //indicates that the div is the child of the div "birthday"
        birthdayDiv.innerHTML = data[i]["name"] + " " + data[i]["birthday"]; //we write in the div the text with the values that we get out of the loop
      }
    }
    return;
  }

  monthActualBirthday();

  // Fonction pour afficher les anniversaires du mois suivant --------------NEXT---------------------------------------------------------------------

  function nextMonthBirthday() {
    let birthdayDiv;
    monthActual++;
    if (monthActual > 1 && monthActual < 12) {
      for (let i = 0; i < data.length; i++) {
        if (getBirthdayMonth(i) === monthActual) {
          birthdayDiv = document.createElement("div"); // Create div
          document.querySelector("#birthday").appendChild(birthdayDiv); //indicates that the div is the child of the div "birthday"
          birthdayDiv.innerHTML = data[i]["name"] + " " + data[i]["birthday"]; //we write in the div the text with the values that we get out of the loop
        }
      }
    } else if (limitMonthNext(monthActual) == false) {
      monthActual = 1;
    }
  }

  // Fonction pour mettre à zero la div "#birthday" et lancer la fonction nextMonthBirthday() grâce à un clique sur le bouton next

  function runFunctionNext() {
    let button = document.getElementById("next");
    button.addEventListener("click", clickFunction);
    function clickFunction() {
      document.querySelector("#birthday").innerHTML = "";
      nextMonthBirthday();
      displayMonth(monthActual);
    }
  }
  runFunctionNext();

  function limitMonthNext(x) {
    if (x > 12) {
      return false;
    }
    return true;
  }

  // ------------------------------------------------------------PREVIOUS---------------------------------------------------------

  function previousMonthBirthday() {
    let birthdayDiv;
    monthActual--;
    if (monthActual > 1 && monthActual < 12) {
      for (let i = 0; i < data.length; i++) {
        if (getBirthdayMonth(i) === monthActual) {
          birthdayDiv = document.createElement("div"); // Create div
          document.querySelector("#birthday").appendChild(birthdayDiv); //indicates that the div is the child of the div "birthday"
          birthdayDiv.innerHTML = data[i]["name"] + " " + data[i]["birthday"]; //we write in the div the text with the values that we get out of the loop
        }
      }
    } else if (LimitMonthPrevious(monthActual) == false) {
      monthActual = 12;
    }
  }

  // Fonction pour mettre à zero la div "#birthday" et lancer la fonction nextMonthBirthday() grâce à un clique sur le bouton next

  function runFunctionPrevious() {
    let button = document.getElementById("previous");
    button.addEventListener("click", clickFunction);
    function clickFunction() {
      document.querySelector("#birthday").innerHTML = "";
      previousMonthBirthday();
      displayMonth(monthActual);
    }
  }
  runFunctionPrevious();

  function LimitMonthPrevious(x) {
    if (x < 1) {
      return false;
    }
    return true;
  }

  // fonction pour changer le mois affiché en fonction de "monthActual"

  function displayMonth(x) {
    let displayH2 = document.querySelector("h2");
    displayH2.innerHTML = monthOfTheYear[x];
  }
}

getBirthdays();

//------------------------------------------- Second API---------------------------------------------------------
const apiKey2 = "pKGo3gtGvxbS06C39uchqA==oAIvCQ0AmA5bbnRE";

const dayActual = new Date().getDate();
const actualMonth = new Date().getMonth() + 1;
let randomId = generateRandomId(1, 10);

async function history() {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/historicalevents?day=" +
      dayActual +
      "&month=" +
      actualMonth, // +
    // "&year=" +
    // randomYear,
    {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        "X-Api-Key": apiKey2,
      },
    }
  );
  const myJson = await response.json();

  let oneObject = myJson[randomId];

  let test = oneObject["event"];

  document.querySelector("#historicalFact").innerHTML = test;
}

// fonction pour generer un nombre aléatoire

function generateRandomId(min, max) {
  let randomNumber = Math.random() * (max - min) + min;
  return parseInt(randomNumber);
}

history();
