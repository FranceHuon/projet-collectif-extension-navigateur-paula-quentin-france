const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxZnNqdWZzdXV0bW52endpbnVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDE5NTgsImV4cCI6MjAwOTQ3Nzk1OH0.-rasUQus-Zlolv_Q1URFeR8XzMi-isSk5wC7xxCgbNc";
const supaBaseURL = "https://aqfsjufsuutmnvzwinus.supabase.co/rest/v1/birthday";

async function getBirthdays() {
  const response = await fetch(supaBaseURL, {
    headers: {
      apiKey: apiKey,
      autorization: "bearer " + apiKey,
    },
  });
  const data = await response.json();
  console.log (data)
}
getBirthdays()