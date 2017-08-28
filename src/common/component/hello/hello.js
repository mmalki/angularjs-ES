import angular from 'angular';
import uirouter from 'angular-ui-router';
import helloComponent from './hello.component';

let helloModule = angular.module('hello', [
    uirouter
])

.component('hello', helloComponent)

.name;

export default helloModule;