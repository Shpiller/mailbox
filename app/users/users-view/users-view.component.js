import template from './users-view.html';
import './users-view.scss';

class Controller {
    /** @ngInject */
    constructor(UsersRestService) {

        if (!this.user) {
            UsersRestService.getOne(this.userId)
                .then(user => {
                    this.user = user;
                });
        }
    }

    cancel() {
        window.history.go(-1);
    }
}
export default  {
    bindings: {
        userId: '<',
        user: '<',
        mode: '@'
    },
    templateUrl: template,
    controller: Controller
}
