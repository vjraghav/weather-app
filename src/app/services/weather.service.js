'use strict';
/** weather service to get current data and forecast data for the 
 * searched city.    
*/
function weatherService ($http, $q) {

    var self = this;
    self.api = 'http://api.openweathermap.org/data/2.5';
    self.apiKey = 'b99f534f0f5aeb69d734df1df9447c5c';
    self.metricsUnits = 'metric';
    self.jsonMode = 'json';
   
    self.searchCurrentData = function(city) {
        var defer = $q.defer();
        var data = {
            params: {
                q : city,
                apiKey: self.apiKey,
                units: self.metricsUnits
            }
        } 

        var currentData = $http.get(self.api + '/weather', data).then(function(response){
            defer.resolve(response);
        }, function(error) {
            defer.reject(error);
        });
       
        return defer.promise;
    }

    // setter and getter current data
    self.setCurrentData = function (currentData) {
        self.currentData = currentData;
    }

    self.getCurrentData = function() {
        return self.currentData;
    }

    self.getForecast = function(city) {
        var defer = $q.defer();
        var data = {
            params: {
                q : city,
                apiKey: self.apiKey,
                mode: self.jsonMode,
                units: self.metricsUnits
            }
        } 

        var currentData = $http.get(self.api + '/forecast', data).then(function(response){
            defer.resolve(response);
        }, function(error) {
            defer.reject(error);
        });
       
        return defer.promise;
    }

    // setter and getter for forecast data
    self.setForecastData = function (forecastData) {
        self.forecastData = forecastData;
    }

    self.getForecastData = function() {
        return self.forecastData;
    }
    
}
angular.module('weather-app').service('weatherService', weatherService);