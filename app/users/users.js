import appConfig from '../app.config';

import AuthServerice from './services/auth.service';
import UserServerice from './services/user.service';

import signinComponent from './signin/signin.component';

angular.module(appConfig.moduleName)
    .service('AuthService', AuthServerice)
    .service('UserService', UserServerice)
    .component('signin', signinComponent);


