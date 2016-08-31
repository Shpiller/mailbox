export default class UsersAuthService {

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
                    this._$cookies.put('loginId', user._id);
                }

                return user;
            })
    }

    signup(user) {
        return this._UsersRestService.add(user)
            .then((user) => {
                this._$cookies.put('loginId', user._id);
                return user;
            });
    }

    isAuth() {
        return this._$cookies.get('loginId');
    }

    logout() {
        delete this._$cookies.remove('loginId');
    }
}

