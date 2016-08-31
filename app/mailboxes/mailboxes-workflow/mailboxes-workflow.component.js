import template from './mailboxes-workflow.html';
import './mailboxes-workflow.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor($scope, MailboxesRestService) {

        $scope.$watch('$ctrl.user', (newVal, oldVal) => {

            MailboxesRestService.getAll()
                .then((mailboxes) => {
                    this.userMailboxes = mailboxes.filter(mailbox => mailbox.email === newVal.email);
                });
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
