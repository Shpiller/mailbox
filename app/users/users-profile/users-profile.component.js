import template from './users-profile.html';
import './users-profile.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor($scope, $cookies, UsersRestService, UsersAuthService, $state) {

        this._UsersRestService = UsersRestService;
        this._UsersAuthService = UsersAuthService;
        this._$state = $state;

        $scope.$watch('$ctrl.user', (newVal, oldVal) => {
            this.editUser = Object.assign({}, newVal);
        });
    }

    save() {
        this._UsersRestService.update(this.editUser._id, this.editUser)
            .then(() => {
                this._$state.go('mailboxes.workflow', {}, {reload: true});
            })
    }

    cancel() {
        window.history.go(-1);
    }

    delete() {
        if(confirm('Are you sure?')){
            this._UsersRestService.delete(this.editUser._id)
                .then(() => {
                    this._UsersAuthService.logout();
                    this._$state.go('signin');
                });
        }
    }
}

export default  {
    bindings: {
        user: '<'
    },
    templateUrl: template,
    controller: Controller
}
