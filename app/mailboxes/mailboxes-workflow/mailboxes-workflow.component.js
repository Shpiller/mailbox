import template from './mailboxes-workflow.html';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor($state, $scope, MailboxesRestService) {

        $scope.$watch('$ctrl.user', (newVal, oldVal) => {

            if(newVal){
                MailboxesRestService.getAll()
                    .then((mailboxes) => {
                        this.userMailboxes = mailboxes.filter(mailbox => mailbox.email === newVal.email);
                        const inbox = this.userMailboxes.find(mailbox => mailbox.type === appSettings.mailboxTypes.inbox);

                        if ($state.current.name === 'mailboxes.workflow') {
                            $state.go('mailboxes.workflow.letters', {mailboxId: inbox._id});
                        }
                    });
            }
        });
    }
}

export default {
    bindings: {
        user: '<'
    },
    templateUrl: template,
    controller: Controller
}
