import angular from 'angular';
import uirouter from 'angular-ui-router';
import mocke2e from 'angular-mocks/ngMockE2E';

export default angular.module('main.helper', [uirouter, mocke2e])
    .run(setupFakeBackend).name;

setupFakeBackend.$inject = ['$httpBackend'];

function setupFakeBackend($httpBackend) {
    var testUser = { username: 'test', password: 'password', firstName: 'Test', lastName: 'User' };

    console.log($httpBackend);

    //fake authenticate api end point
    $httpBackend.whenPOST('/api/authenticate').respond(function(method, url, data) {
        // get parameters from post request
        var params = angular.fromJson(data);
        console.log(params);

        // check user credentials and return fake jwt token if valid
        if (params.username === testUser.username && params.password === testUser.password) {
            console.log(1);
            return [200, { token: 'fake-jwt-token', user: { username: 'test', firstName: 'Test', lastName: 'User' }, code: 0 }];

        } else {
            console.log(2);
            return [400, { message: 'LOGIN_WRONG_EMAIL_PASSWORD_PAIR', code: 1 }];

        }
    });

    // // pass through any urls not handled above so static files are served correctly
    $httpBackend.whenGET(/^\w+.*/).passThrough();
}