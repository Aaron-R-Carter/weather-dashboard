var apiKey = "b735a815d875a14bc44e6e62c26375b9";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(queryURL);
    // Create CODE HERE to log the resulting object
    // Create CODE HERE to transfer content to HTML
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
    // Create CODE HERE to dump the temperature content into HTML

  });