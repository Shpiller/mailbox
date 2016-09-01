import template from './users-signup.html';
import './users-signup.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor($state, UsersAuthService, MailboxesRestService) {
        this._UsersAuthService = UsersAuthService;
        this._MailboxesRestService = MailboxesRestService;
        this._$state = $state;

        this.user = {};
    }

    signup() {

        this.disabled = true;

        this._UsersAuthService.signup(this.user)
            .then(user => {

                this._MailboxesRestService.add({title: `${this.user.email};${appSettings.mailboxTypes.inbox}`})
                    .then(() => {
                        this._MailboxesRestService.add({title: `${this.user.email};${appSettings.mailboxTypes.outbox}`})
                            .then(() => {
                                this._$state.go('mailboxes.workflow');
                            });
                    });

            })
            .catch(() => this.disabled = false);
    };
}

export default  {
    templateUrl: template,
    controller: Controller
}
