const today = document.getElementById("today");
const cases = document.getElementById("cases");
const deaths = document.getElementById("deaths");
const recovered = document.getElementById("recovered");
const loader = document.getElementById("loader");
const content = document.getElementById("content");

// set Local date and Time
setInterval(function getTime() {
  let time = new Date();
  time = time.toLocaleString();
  document.getElementById("date").innerHTML = time;
}, 1000);

getData();

function getTime() {
  var time = new Date();
  time = time.toLocaleString();
  document.getElementById("date").innerHTML = time;
}

function getData() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://coronavirus-19-api.herokuapp.com/countries");
  xhr.responseType = "text";

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    data = Array.from(data);
    data = data.find((record) => record.country === "World");

    let [todayCases, totalCases, totalDeaths, totalRecovered] = [data.todayCases, data.cases, data.deaths, data.recovered];

    today.innerHTML = todayCases.toLocaleString();
    cases.innerHTML = totalCases.toLocaleString();
    deaths.innerHTML = totalDeaths.toLocaleString();
    recovered.innerHTML = totalRecovered.toLocaleString();

    content.classList.remove("hidden");
    loader.classList.add("hidden");
  };

  xhr.send();
}
