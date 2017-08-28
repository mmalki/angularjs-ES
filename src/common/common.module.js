import angular from 'angular';

import UserInfo from './component/user-info/user-info';
import Hello from './component/hello/hello';
import NavBar from './component/nav-bare/nav-bar';
import Services from './services/index'

export default angular
    .module('main.app.common', [
        UserInfo,
        Hello,
        NavBar,
        Services

    ])
    .name;