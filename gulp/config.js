'use strict';

var CFG = {
    BUILD_DIR: './dist',
    SOURCES_DIR: './src',

    BUILD_DEPS: {
        JS: [
            'node_modules/angular/angular.js',
            'node_modules/@angular/router/angular1/angular_1_router.js',
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/lodash/lodash.js'
        ],
        FONTS: [
            'node_modules/bootstrap/fonts/*'
        ]
    }
};

module.exports = CFG;
