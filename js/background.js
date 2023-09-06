const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxZnNqdWZzdXV0bW52endpbnVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDE5NTgsImV4cCI6MjAwOTQ3Nzk1OH0.-rasUQus-Zlolv_Q1URFeR8XzMi-isSk5wC7xxCgbNc";
const supaBaseURL = "https://aqfsjufsuutmnvzwinus.supabase.co/rest/v1/birthday";

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
let monthActual = new Date().getMonth() + 1;
console.log(monthActual);

async function getBirthdays() {
  const response = await fetch(supaBaseURL, {
    headers: {
      apiKey: apiKey,
      autorization: "bearer " + apiKey,
    },
  });
  const data = await response.json();

  function getBirthdayMonth(x) {
    let dateOfBirthday = new Date(data[x]["birthday"]);
    let monthOfBirthday = dateOfBirthday.getMonth() + 1;
    return monthOfBirthday;
  }
  let birthdayDiv;
  for (let i = 0; i < data.length; i++) {
    if (getBirthdayMonth(i) === monthActual) {
      birthdayDiv = document.createElement("div");
      document.querySelector("#birthday").appendChild(birthdayDiv);
      birthdayDiv.innerHTML =
        "C'est l'anniversaire de " + data[i]["name"] + data[i]["birthday"];
    }
  }
}
getBirthdays();

// let tabBirthday = [];
// for (let i = 0; i < data.length; i++) {
//   if (getBirthdayMonth(i) === monthActual) {
//     let test = data[i]["name"] + data[i]["birthday"];
//     tabBirthday.push(test);
//     let birthday = document.querySelector("#birthday");
//     birthday.innerHTML = "C'est l'anniversaire de " + "<br>" + tabBirthday;
//   }
// }
