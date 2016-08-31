import template from './users-signup.html';
import './users-signup.scss';

class Controller {

    /** @ngInject */
    constructor(UsersAuthService, $state) {
        this._UsersAuthService = UsersAuthService;
        this._$state = $state;

        this.user = {};

        const sourcethumbs = 'https://randomuser.me/api/portraits/thumb';

        this.menThumbs = Array.from(Array(5).keys()).map(i => `${sourcethumbs}/men/${i+1}.jpg`);
        this.womenThumbs = Array.from(Array(5).keys()).map(i => `${sourcethumbs}/women/${i+1}.jpg`);
    }

    signup() {
        this._UsersAuthService.signup(this.user)
            .then(user => {
                if (user) {
                    this._$state.go('mailboxes');
                } else {
                    alert('no user find');
                }
            });
    };

    avatarSelect(url) {
        this.user = this.user || {};
        this.user.avatarUrl = url;
    }
}

export default  {
    templateUrl: template,
    controller: Controller
}
