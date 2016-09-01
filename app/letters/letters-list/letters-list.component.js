import template from './letters-list.html';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor(MailboxesRestService, LettersRestService) {

        MailboxesRestService.getOne(this.mailboxId)
            .then(mailbox => {
                LettersRestService.getAll()
                    .then(letters => {
                        if (mailbox.type === appSettings.mailboxTypes.inbox) {
                            this.letters = letters.filter(letter => letter.to === mailbox.email);
                        } else {
                            this.letters = letters.filter(letter => letter.mailbox === mailbox._id);
                        }
                    });
            });
    }
}

export default {
    bindings: {
        mailboxId: '<'
    },
    templateUrl: template,
    controller: Controller
}
