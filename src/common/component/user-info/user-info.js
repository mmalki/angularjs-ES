import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userInfoComponent from './user-info-component';

let userInfoModule = angular.module('userInfo', [
    uiRouter
])

.component('userInfoComponent', userInfoComponent)

.name;

export default userInfoModule;