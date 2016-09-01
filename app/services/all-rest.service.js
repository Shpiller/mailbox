import RestService from './rest.service';

export default class AllRestService extends RestService {

    /** @ngInject */
    constructor($http) {
        super($http, '');
    }

    getAll() {
        return super.getAll()
            .then((all) => {

                let mailboxes = all.mailboxes;
                let letters = all.letters;
                let users = all.users;

                mailboxes = mailboxes.map(mailbox => {
                    const title = mailbox.title.split(';');
                    mailbox.email = title[0];
                    mailbox.type = title[1];
                    return mailbox;
                });

                users = users.map(user => {
                    user.birthdate = user.birthdate.substr(0, 10);
                    return user;
                });

                return {
                    mailboxes,
                    letters,
                    users
                }
            });
    }

    getOne(objectId) {
        return null;
    };

    add(object) {
        return null;
    };

    update(objectId, object) {
        return null;
    };

    delete(objectId) {
        return null;
    };
}
