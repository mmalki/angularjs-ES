export function routing($stateProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login-component></login-component>'
        });
}