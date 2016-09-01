import template from './users-view.html';
import './users-view.scss';

class Controller {
    /** @ngInject */
    constructor($state, UsersRestService) {

        this._$state = $state;

        if (!this.user) {
            UsersRestService.getOne(this.userId)
                .then(user => {
                    this.user = user;
                });
        }
    }

    newletter() {
        this._$state.go('mailboxes.workflow.letters-form', {to: this.user.email});
    }

    cancel() {
        window.history.go(-1);
    }
}
export default  {
    bindings: {
        userId: '<',
        user: '<',
        mode: '@'
    },
    templateUrl: template,
    controller: Controller
}
