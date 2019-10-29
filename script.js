// global variables
var apiKey = "b735a815d875a14bc44e6e62c26375b9";

//date function
function todaysDate() {
    var todaysDate = moment().format("MMMM Do YYYY");
    $("#city-header-date").append(`<div>${todaysDate}</div>`);
    
}
todaysDate();

// city search button click event function
$("#search-btn-city").on("click", function (event) {
    event.preventDefault();

    // variables for city input 
    var city = $("#city-input").val();
    var cityQueryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    // divs 
    var cityHeader = $("#city-header");
    var temperatureDiv = $("#temperature");
    var humidityDiv = $("#humidity");
    var windSpeedDiv = $("#wind-speed");
    var uvIndexDiv = $("#uv-index");

    // ajax call for weather api data

    $.ajax({
        url: cityQueryUrl,
        method: "GET"
    }).then(function (response) {

        // clear previous search results 
        cityHeader.empty();
        temperatureDiv.empty();
        windSpeedDiv.empty();
        uvIndexDiv.empty();
        

        // add results to page using from response object
        cityHeader.text(response.name);
        temperatureDiv.text(`Temperature: ${Math.floor(response.main.temp)} °F`);
        humidityDiv.text(`Humidity: ${response.main.humidity} %`);
        windSpeedDiv.text(`Wind Speed: ${Math.floor(response.wind.speed)} mph`);
        uvIndexDiv.text(response)

        console.log(response);
    })
});



 

 
