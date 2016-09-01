import template from './letters-form.html';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor($scope, $state, LettersRestService, AllRestService) {

        this._$state = $state;
        this._LettersRestService = LettersRestService;
        this._AllRestService = AllRestService;

        $scope.$watch('$ctrl.userMailboxes', (newVal, oldVal) => {
            if (newVal) {
                this.outbox = newVal.find(mailbox => mailbox.type === appSettings.mailboxTypes.outbox);
                this.letter = {mailbox: this.outbox._id};
            }
        });
    }

    save() {
        this._LettersRestService.add(this.letter)
            .then(() => {

                this._AllRestService.getAll()
                    .then(all => {
                        //copy email to inbox of receiver
                        const mailboxTo = all.mailboxes.find(mailbox => mailbox.type === appSettings.mailboxTypes.inbox && mailbox.email === this.letter.to);

                        if (mailboxTo) {
                            const inboxLetter = Object.assign({}, this.letter);
                            inboxLetter.mailbox = mailboxTo._id;
                            //set from email
                            inboxLetter.to = this.outbox.email;

                            this._LettersRestService.add(inboxLetter)
                                .then(() => {
                                    this._$state.go('mailboxes.workflow.letters', {mailboxId: this.letter.mailbox});
                                });
                        } else {
                            this._$state.go('mailboxes.workflow.letters', {mailboxId: this.letter.mailbox});
                        }
                    });
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
