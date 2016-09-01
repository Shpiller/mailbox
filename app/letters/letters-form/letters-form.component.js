import template from './letters-form.html';
import './letters-form.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor($scope, $state, LettersRestService) {

        this._$state = $state;
        this._LettersRestService = LettersRestService;

        $scope.$watch('$ctrl.userMailboxes', (newVal, oldVal) => {
            if(newVal){
                const outbox = newVal.find(mailbox => mailbox.type === "Outbox");
                this.letter = {mailbox: outbox._id};
            }
        });
    }

    save() {
        this._LettersRestService.add(this.letter)
            .then(() => {
                this._$state.go('mailboxes.workflow.letters', {mailboxId: this.letter.mailbox});
            })
    }

    cancel() {
        window.history.go(-1);
    }
}

export default {
    bindings: {
        user: '<',
        userMailboxes: '<'
    },
    templateUrl: template,
    controller: Controller
}
