'use strict';

function forecastController($scope, weatherService) {

    var self = $scope;
    self.isForecastData = false;
    self.weatherImage = '';

    self.forecastList = [];

    // Get weather forecast for the Searched city, for 5 days with every 3 hours
    self.getForecast = function() {

        // Get forecast service call
        self.forecastData = weatherService.getForecastData();

        // Check if weather forecast data is available
        if(self.forecastData) {
            self.isForecastData = true;

            // Iterate the response and push the needed details to forecastList
            angular.forEach(self.forecastData.list, function(value) {
                var data = {};
                data.date = new Date(value.dt_txt);
                data.temp = value.main.temp;
                data.temp_min = value.main.temp_min;
                data.temp_max = value.main.temp_max;
                data.humidity = value.main.humidity;
                data.weather = value.weather[0].main;
                data.weatherImage = 'http://openweathermap.org/img/w/'+ value.weather[0].icon +'.png';

                // algorithm to randomly set the background
                self.rand = Math.floor(Math.random() * 6); 
                data.climate = 'climate'+ self.rand + '.png';

                // Push the data to forecastList
                self.forecastList.push(data);
            });
        }
    };


    // Call the getForecast method on routing to this component
    self.getForecast();

}

angular.module('weather-app')
.component('forecast', {
    templateUrl: 'app/components/forecast/forecast.html',
    controller: forecastController
});