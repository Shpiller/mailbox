import template from './letters-item.html';
import './letters-item.scss';

class Controller {
    /** @ngInject */
    constructor($state) {
        this._$state = $state;
    }

    viewProfile() {
        this._$state.go('mailboxes.workflow.user', {userId: this.letter.user._id});
    }
}

export default {
    bindings: {
        letter: '<'
    },
    templateUrl: template,
    controller: Controller
}
