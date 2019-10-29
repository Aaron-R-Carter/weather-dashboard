var apiKey = "b735a815d875a14bc44e6e62c26375b9";



$("#search-btn-city").on("click", function (event) {
    event.preventDefault();

    // variables for city input 
    var city = $("#city-input").val();
    var cityQueryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    var cityHeader = $("#city-header");
    var cityCapitalized = city.charAt(0).toUpperCase() + city.slice(1);


    console.log(cityQueryUrl);

    $.ajax({
        url: cityQueryUrl,
        method: "GET"
    }).then(function (response) {

        cityHeader.empty();
        cityHeader.text(response.name);



        console.log(response);
    })
});




    // // Transfer content to HTML
    // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".temp").text("Temperature (F) " + response.main.temp);

    // // Converts the temp to Kelvin with the below formula
    // var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    // $(".tempF").text("Temperature (Kelvin) " + tempF);

    // // Log the data in the console as well
    // console.log("Wind Speed: " + response.wind.speed);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temperature (F): " + response.main.temp);


