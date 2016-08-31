import RestService from '../../services/rest.service';

export default class MailboxesRestService extends RestService {

    /** @ngInject */
    constructor($http) {
        super($http, 'mailboxes');
    }
}
