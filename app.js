function getTemp() {
  let weatherData;
  fetch("https://weatherdbi.herokuapp.com/data/weather/innopolis")
    .then((response) => response.json())
    .then((data) => {
      weatherData = data.next_days;
      console.log(weatherData);
      for (let i = 0; i < 8; i++) {
        document.getElementById(`grid_cell_${i}`).innerHTML =
          weatherData[i].day +
          " is " +
          weatherData[i].comment +
          " ( " +
          weatherData[i].min_temp.c +
          " - " +
          weatherData[i].max_temp.c +
          " °C )";
      }
    });
}
window.onload = getTemp;
