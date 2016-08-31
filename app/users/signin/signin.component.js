import template from './signin.html';
import './signin.scss';

class Controller {

    /** @ngInject */
    constructor(AuthService, $state) {
        this._AuthService = AuthService;
        this._$state = $state;

        this.form = {
            email: '',
            birthdate: ''
        };
    }

    signin() {
        this._AuthService.signin(this.form.email, this.form.birthdate)
            .then(user => {
                if (user) {
                    this._$state.go('mailboxes');
                } else {
                    alert('no user find');
                }
            });
    };
}

export default  {
    templateUrl: template,
    controller: Controller
}
