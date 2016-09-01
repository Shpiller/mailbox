import template from './users-signin.html';
import './users-signin.scss';

class Controller {

    /** @ngInject */
    constructor(UsersAuthService, $state) {
        this._UsersAuthService = UsersAuthService;
        this._$state = $state;

        this.form = {};
    }

    signin() {
        this._UsersAuthService.signin(this.form.email, this.form.birthdate)
            .then(user => {
                if (user) {
                    this._$state.go('mailboxes.workflow');
                } else {
                    alert('No user found, Please sign up');
                }
            });
    };
}

export default  {
    templateUrl: template,
    controller: Controller
}
