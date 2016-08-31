import template from './users-profile.html';
import './users-profile.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor($cookies, UsersRestService, UsersAuthService, $state) {

        this._UsersRestService = UsersRestService;
        this._UsersAuthService = UsersAuthService;
        this._$state = $state;

        UsersRestService.getOne($cookies.get(appSettings.cookieName))
            .then(user => {
                this.user = user;
            });

    }

    save() {

    }

    cancel() {
        window.history.go(-1);
    }

    delete() {

    }
}

export default  {
    templateUrl: template,
    controller: Controller
}
