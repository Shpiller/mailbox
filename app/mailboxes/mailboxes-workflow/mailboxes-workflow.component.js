import template from './mailboxes-workflow.html';
import './mailboxes-workflow.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor($cookies, $state, UsersRestService, UsersAuthService) {

        this._$cookies = $cookies;
        this._$state = $state;
        this._UsersRestService = UsersRestService;
        this._UsersAuthService = UsersAuthService;

        UsersRestService.getOne($cookies.get(appSettings.cookieName))
            .then(user => {
                this.user = user;
            });
    }

    logout() {
        this._UsersAuthService.logout();
        this._$state.go('signin');
    }

    gohome() {
        this._$state.go('mailboxes');
    }

    editProfile() {
        this._$state.go('profile');
    }
}

export default {
    templateUrl: template,
    controller: Controller
}
