// Init stroage

const storage = new Storage();

//! Get stored location data

const weatherLocation = storage.getLocationData();

// Init Weather Class

const weather = new Weather(weatherLocation.city);

// Init UI Class

const ui = new UI();

//! Get weater on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

//! Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;

  // Change Location
  weather.changeLocation(city);

  // Set Location in Local storage
  storage.setLocationData(city);

  // Get and Display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

//! Get weather function
function getWeather() {
  //? Should be promise because of async
  weather.getWeather().then(results => {
    ui.paint(results);
  });
  // .catch(err => console.log("err"));
}
