import angular from 'angular';
import uirouter from 'angular-ui-router';


import { routing } from './login.config.js';
import loginComponent from './login.component';
import template from './login.tpl.html';


export default angular
    .module('main.app.login', [uirouter])
    .config(routing)
    .component('loginComponent', { controller: loginComponent, template })
    .name