import RestService from '../../services/rest.service';

export default class UserService extends RestService {

    /** @ngInject */
    constructor($http) {
        super($http, 'users');
    }

    getOne(objectId) {
        return super.getOne(objectId)
            .then(response => {
                let user = response.data;
                user.birthdate = user.birthdate.substr(0, 10);
                return user;
            });
    }
}
