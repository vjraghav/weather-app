'use strict';

function HomeController() {
    
}

angular.module('weather-app')
.component('home', {
    templateUrl: 'app/components/home/home.html',
    $routeConfig: [
        {path: '/', name: 'Current', component: 'currentData', useAsDefault: true},
        {path: '/forecast', name: 'Forecast', component: 'forecast'}
    ],
    controller: HomeController,
    bindings: { $router: '<' }
});