import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngStorage from '../../../node_modules/ngStorage/ngStorage';

//services
import EventConstant from './events.constant';
import AjaxErrorHandlerService from './ajax-error-handler.service';
import ErrorService from './error.service';
import UserService from './authentification.service'


export default angular.module('app.service', [uirouter, ngStorage.name])
    .constant('Event', EventConstant)
    .service('AjaxError', AjaxErrorHandlerService)
    .service('Error', ErrorService)
    .service('UserService', UserService)
    .name;