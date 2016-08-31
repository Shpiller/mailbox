import RestService from '../../services/rest.service';

export default class UsersRestService extends RestService {

    /** @ngInject */
    constructor($http) {
        super($http, 'users');
    }

    getAll() {
        return this._$http.get(this.baseUrl + this.model)
            .then((response) => {
                return response.data.map(user => {
                    user.birthdate = user.birthdate.substr(0, 10);
                    return user;
                })
            });
    }

    getOne(objectId) {
        return super.getOne(objectId)
            .then(response => {
                let user = response.data;
                user.birthdate = user.birthdate.substr(0, 10);
                return user;
            });
    }

    add(object) {
        return this._$http.post(this.baseUrl + this.model, object)
            .then((response) => {
                let user = response.data;
                user.birthdate = user.birthdate.substr(0, 10);
                return user;
            });
    };
}
