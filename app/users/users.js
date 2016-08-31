import appSettings from '../app.settings';

import UsersAuthService from './users-services/users-auth.service';
import UsersRestService from './users-services/users-rest.service';

import usersSigninComponent from './users-signin/users-signin.component';
import usersSignupComponent from './users-signup/users-signup.component';
import usersProfileComponent from './users-profile/users-profile.component';
import usersFormComponent from './users-form/users-form.component';
import avatarMenuItemComponent from './users-form/avatar-menu-item/avatar-menu-item.component';

angular.module(appSettings.moduleName)
    .service('UsersAuthService', UsersAuthService)
    .service('UsersRestService', UsersRestService)
    .component('usersSignin', usersSigninComponent)
    .component('usersSignup', usersSignupComponent)
    .component('usersProfile', usersProfileComponent)
    .component('usersForm', usersFormComponent)
    .component('avatarMenuItem', avatarMenuItemComponent);

