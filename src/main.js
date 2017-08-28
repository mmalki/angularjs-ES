// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

// 3rd party modules
//import bootstrap from 'bootstrap';
import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularUiBootstrap from 'angular-ui-bootstrap';


// import mocks from 'angular-mocks';
// import ngStorage from 'ngStorage';



// Modules
import app from './app/app.module';
import common from './common/common.module';
import featureA from './feature-a/feature-a.module';
import featureB from './feature-b/feature-b.module';
import fakeBackend from './helpers/fake-bakend';
import appRun from './run';
import login from './login/index';


angular.module('main', [
    angularAnimate, angularUiBootstrap, common, fakeBackend, login, app, featureA, featureB
]).run(appRun);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});