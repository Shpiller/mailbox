import RestService from '../../services/rest.service';

export default class UsersRestService extends RestService {

    /** @ngInject */
    constructor($http) {
        super($http, 'users');
    }

    getAll() {
        return super.getAll()
            .then((users) => {
                return users.map(user => {
                    user.birthdate = user.birthdate.substr(0, 10);
                    return user;
                });
            });
    }

    getOne(objectId) {
        return super.getOne(objectId)
            .then(user => {
                user.birthdate = user.birthdate.substr(0, 10);
                return user;
            });
    }

    add(object) {
        return super.add(object)
            .then((user) => {
                user.birthdate = user.birthdate.substr(0, 10);
                return user;
            });
    };
}
