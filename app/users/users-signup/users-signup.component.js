import template from './users-signup.html';
import './users-signup.scss';

class Controller {

    /** @ngInject */
    constructor(UsersAuthService, $state) {
        this._UsersAuthService = UsersAuthService;
        this._$state = $state;

        this.user = {};
    }

    signup() {
        this._UsersAuthService.signup(this.user)
            .then(user => {
                this._$state.go('mailboxes.workflow');
            });
    };
}

export default  {
    templateUrl: template,
    controller: Controller
}
