export default class AuthService {

    /** @ngInject */
    constructor($cookies, UserService) {
        this._$cookies = $cookies;
        this._UserService = UserService;
    }

    signin(email, birthdate) {
        return this._UserService.getAll()
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
        return this._UserService.add(user)
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

