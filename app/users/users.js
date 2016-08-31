import appSettings from '../app.settings';

import UsersAuthService from './users-services/users-auth.service';
import UsersRestService from './users-services/users-rest.service';

import usersSigninComponent from './users-signin/users-signin.component';
import usersSignupComponent from './users-signup/users-signup.component';
import avatarMenuItemComponent from './users-signup/avatar-menu-item/avatar-menu-item.component';

angular.module(appSettings.moduleName)
    .service('UsersAuthService', UsersAuthService)
    .service('UsersRestService', UsersRestService)
    .component('usersSignin', usersSigninComponent)
    .component('usersSignup', usersSignupComponent)
    .component('avatarMenuItem', avatarMenuItemComponent);

