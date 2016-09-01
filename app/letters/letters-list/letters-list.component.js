import template from './letters-list.html';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor(AllRestService) {

        AllRestService.getAll()
            .then(all => {
                this.mailbox = all.mailboxes.find(mailbox => mailbox._id === this.mailboxId);
                this.letters = all.letters.filter(letter => letter.mailbox === this.mailbox._id)
                    .map(letter => {
                        letter.user = all.users.find(user => user.email === letter.to);
                        return letter;
                    })
            })
    }
}

export default {
    bindings: {
        mailboxId: '<'
    },
    templateUrl: template,
    controller: Controller
}
