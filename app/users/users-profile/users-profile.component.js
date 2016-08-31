import template from './users-profile.html';
import './users-profile.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor($cookies, UsersRestService, UsersAuthService, $state) {

        this._UsersRestService = UsersRestService;
        this._UsersAuthService = UsersAuthService;
        this._$state = $state;
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
    bindings: {
        user: '<'
    },
    templateUrl: template,
    controller: Controller
}
