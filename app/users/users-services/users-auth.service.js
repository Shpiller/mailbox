export default class AuthService {

    /** @ngInject */
    constructor($cookies, UsersRestService) {
        this._$cookies = $cookies;
        this._UsersRestService = UsersRestService;
    }

    signin(email, birthdate) {
        return this._UsersRestService.getAll()
            .then(users => {
                const user = users.find(user => {
                    return user.email === email
                        && user.birthdate === birthdate;
                });

                if (user) {
                    this._$cookies.loginId = user._id;
                }

                return user;
            })
    }

    signup(user) {
        return this._UsersRestService.add(user)
            .then((user) => {
                this._$cookies.loginId = user._id;
            });
    }

    isAuth() {
        return this._$cookies.loginId;
    }

    logout() {
        delete this._$cookies.loginId;
    }
}

