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
    var cityHeader = $("#city-header");

    // ajax call for weather api data

    $.ajax({
        url: cityQueryUrl,
        method: "GET"
    }).then(function (response) {

        // clear previous search results 
        cityHeader.empty();

        // add results to page using from response object
        cityHeader.text(response.name);

        console.log(response);
    })
});




    // // Transfer content to HTML
    // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".temp").text("Temperature (F) " + response.main.temp);

 

 

