import appConfig from '../app.config';

export default class RestService {

    constructor($http, model) {
        this._$http = $http;

        this.model = model;
        this.baseUrl = appConfig.rest.url + `${appConfig.rest.name}/`;
    }

    getAll() {
        return this._$http.get(this.baseUrl + this.model)
            .then((response) => response.data);
    }

    getOne(objectId) {
        return this._$http.get(this.baseUrl + this.model + '/' + objectId)
            .then((response) => {
                return response.data;
            });
    };

    add(object) {
        return this._$http.post(this.baseUrl + this.model, object)
            .then((response) => {
                return response.data;
            });
    };

    update(objectId, object) {
        return this._$http.patch(this.baseUrl + this.model + '/' + objectId, object);
    };

    delete(objectId) {
        return this._$http.delete(this.baseUrl + this.model + '/' + objectId);
    };
}

