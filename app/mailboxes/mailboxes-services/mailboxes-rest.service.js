import RestService from '../../services/rest.service';

export default class MailboxesRestService extends RestService {

    /** @ngInject */
    constructor($http) {
        super($http, 'mailboxes');
    }

    getAll() {
        return super.getAll()
            .then((mailboxes) => {
                return mailboxes.map(mailbox => {
                    const title = mailbox.title.split(';');
                    mailbox.email = title[0];
                    mailbox.type = title[1];
                    return mailbox;
                });
            });
    }

    getOne(objectId) {
        return super.getOne(objectId)
            .then(mailbox => {
                const title = mailbox.title.split(';');
                mailbox.email = title[0];
                mailbox.type = title[1];
                return mailbox;
            });
    }
}
