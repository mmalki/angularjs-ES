import angular from 'angular';
import mocks from 'angular-mocks';

import * as main from './src/main';

let context = require.context('./src/common/hello/', true, /\.spec\.js/);
context.keys().forEach(context);