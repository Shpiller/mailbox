import appSettings from '../../app.settings';

export default class UsersAuthService {

    /** @ngInject */
    constructor($cookies, UsersRestService) {
        this._$cookies = $cookies;
        this._UsersRestService = UsersRestService;

        const path = window.location.pathname;
        this.cookiesOptions = { path };
    }

    signin(email, birthdate) {
        return this._UsersRestService.getAll()
            .then(users => {
                const user = users.find(user => {
                    return user.email === email
                        && user.birthdate === birthdate;
                });

                if (user) {
                    this._$cookies.put(appSettings.cookieName, user._id, this.cookiesOptions);
                }

                return user;
            })
    }

    signup(user) {
        return this._UsersRestService.add(user)
            .then((user) => {
                this._$cookies.put(appSettings.cookieName, user._id, this.cookiesOptions);
                return user;
            });
    }

    isAuth() {
        return this._$cookies.get(appSettings.cookieName);
    }

    logout() {
        this._$cookies.remove(appSettings.cookieName, this.cookiesOptions);
    }
}

