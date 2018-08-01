var config_module = angular.module('config', [])
    .constant('CONFIG', {
        'SYSTEM_NAME': 'Restaurant finder',
        'BASE_URL': 'http://localhost:6060/api/',
        'API_URL': 'http://localhost:6060/api/',
        'LOGIN_URL': 'http://localhost:6060/',
        'SYSTEM_LANGUAGE': ''
    });