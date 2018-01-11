'use strict';

(function () {
    angular.module('weather-app', [
        'app.templates',
        'ngComponentRouter'
    ])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: `
            <ng-outlet></ng-outlet>
        `,
        $routeConfig: [
            {path: '/', name: 'Home', component: 'home', useAsDefault: true}
        ]
    })
    .run(function ($rootScope) {
        console.log('app is running...');
    });
})();
