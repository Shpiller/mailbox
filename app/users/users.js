import appConfig from '../app.config';

import UsersAuthService from './users-services/users-auth.service';
import UsersRestService from './users-services/users-rest.service';

import usersSigninComponent from './users-signin/users-signin.component';

angular.module(appConfig.moduleName)
    .service('UsersAuthService', UsersAuthService)
    .service('UsersRestService', UsersRestService)
    .component('usersSignin', usersSigninComponent);


