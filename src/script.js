
// API url
const API = "http://api.aladhan.com/v1/timingsByCity?country=";
//
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const hiddenCity = document.getElementById("hidden-city");

const fajr = document.getElementById("fajr");
const sunRise = document.getElementById("sun-rise");
const dohr = document.getElementById("dohr");
const asr = document.getElementById("asr");
const maghreb = document.getElementById("maghreb");
const sunSet = document.getElementById("sun-set");
const ishaa = document.getElementById("ishaa");

///////////////////////////






async function prayerTime(cityName) {

    const response = await fetch(API + `jo&city=${cityName}`);
    let dataResponse = await response.json();
    //
    
    
    
    hiddenCity.innerHTML = searchInput.value.toUpperCase();
    hiddenCity.style.fontWeight = "bold";
    hiddenCity.style.fontSize = "25px";
    fajr.innerHTML = dataResponse.data.timings.Fajr;
    sunRise.innerHTML = dataResponse.data.timings.Sunrise;
    dohr.innerHTML = dataResponse.data.timings.Dhuhr;
    asr.innerHTML = dataResponse.data.timings.Asr;
    maghreb.innerHTML = dataResponse.data.timings.Maghrib;
    sunSet.innerHTML = dataResponse.data.timings.Sunset;
    ishaa.innerHTML = dataResponse.data.timings.Isha;


}

searchBtn.addEventListener("click",() => {
    prayerTime(searchInput.value);
});


searchBtn.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchBtn.click(event);
    }
    
});


prayerTime();






////////////////////// Live time:

function updateLiveTime() {
    const dateTimeElement = document.getElementById('current-date-time');
    const updateDateTime = () => {
        const now = new Date();
        dateTimeElement.textContent = `Current Date and Time: ${now.toLocaleString()}`;
    };
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update time every second
}

// Update the live time initially
updateLiveTime();

