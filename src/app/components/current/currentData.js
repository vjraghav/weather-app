'use strict';

function currentDataController($scope, weatherService) {

    var self = $scope;
    self.isCurrentData = false;
    self.weatherImage = '';


    // On router navigation from home to this component 
    this.$routerOnActivate = function(next) {

        // Check if the route has sent any route params
        if (next.params.data) {
            self.currentData = next.params.data;
        } else {
            self.currentData = weatherService.getCurrentData();
        }
        
        // check if the current weather data is available
        if(self.currentData) {
            self.isCurrentData = true;
            self.weatherImage = 'http://openweathermap.org/img/w/'+ self.currentData.weather[0].icon +'.png';
            self.temp = self.currentData.main.temp + '\xB0';
            self.minTemp = self.currentData.main.temp_min + '\xB0';
            self.maxTemp = self.currentData.main.temp_max + '\xB0';
            self.weather = self.currentData.weather[0].main;
            self.city = self.currentData.name;
            self.humidity = self.currentData.main.humidity;
        }
      };
}

angular.module('weather-app')
.component('currentData', {
    templateUrl: 'app/components/current/currentData.html',
    controller: currentDataController
});