import RestService from '../../services/rest.service';

export default class LettersRestService extends RestService {

    /** @ngInject */
    constructor($http) {
        super($http, 'letters');
    }
}
