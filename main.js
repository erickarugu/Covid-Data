req = new XMLHttpRequest();

req.open('GET', 'https://coronavirus-19-api.herokuapp.com/countries');
req.responseType = 'text';
req.onload = function () {
    let data = JSON.parse(req.responseText);
    data = data[7];
    console.log(data);
    let [todayCases, totalCases, totalDeaths, totalRecovered] = [data.todayCases, data.cases, data.deaths, data.recovered];
    let today = document.getElementById('today');
    let cases = document.getElementById('cases');
    let deaths = document.getElementById('deaths');
    let recovered = document.getElementById('recovered');

    today.innerHTML = todayCases.toLocaleString();
    cases.innerHTML = totalCases.toLocaleString();
    deaths.innerHTML = totalDeaths.toLocaleString();
    recovered.innerHTML = totalRecovered.toLocaleString();
}

req.send();

// set date
let myVar = setInterval(getTime, 1000);

function getTime() {  
    let time = new Date();
    time = time.toLocaleString();
    document.getElementById('date').innerHTML = time;
    console.log(time);
}