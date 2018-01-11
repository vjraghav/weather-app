'use strict';

function NavigationController($scope, weatherService) {

    var self = $scope;
    self.city = '';

    self.$router = self.$parent.$ctrl.$router;

    self.searchCurrentData = function() {

        weatherService.searchCurrentData(self.city).then(function(response){
            self.currentData = response.data;
            weatherService.setCurrentData(self.currentData);
            self.getForecast();
            self.$router.navigate(['Current', {data: self.currentData}]);
        }, function(error){
            console.log('Error');
        });

       

    }

    self.getForecast = function() {
        weatherService.getForecast(self.city).then(function(response){
            self.forecastData = response.data;
            weatherService.setForecastData(self.forecastData);
        }, function(error){
            console.log('Error');
        });
    }

}

angular.module('weather-app')
.component('navigation', {
    templateUrl: 'app/components/navigation/navigation.html',
    controller: NavigationController
});