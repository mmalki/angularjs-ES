import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './nav-bar-component';

let navbarModule = angular.module('navbar', [
    uiRouter
])

.component('navbar', navbarComponent)

.name;

export default navbarModule;