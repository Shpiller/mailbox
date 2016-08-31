import template from './mailboxes.html';
import './mailboxes.scss';

import appSettings from '../app.settings';

class Controller {

    /** @ngInject */
    constructor($scope, $cookies, $state, UsersRestService, UsersAuthService) {

        this._$cookies = $cookies;
        this._$state = $state;
        this._UsersRestService = UsersRestService;
        this._UsersAuthService = UsersAuthService;

        UsersRestService.getOne($cookies.get(appSettings.cookieName))
            .then(user => {
                console.log('load user from rest-service');
                this.user = user;
            });
    }

    logout() {
        this._UsersAuthService.logout();
        this._$state.go('signin');
    }

    gohome() {
        this._$state.go('mailboxes.workflow');
    }

    editProfile() {
        this._$state.go('mailboxes.profile');
    }
}

export default {
    templateUrl: template,
    controller: Controller
}
