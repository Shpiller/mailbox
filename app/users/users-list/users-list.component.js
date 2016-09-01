import template from './users-list.html';
import './users-list.scss';

class Controller {
    /** @ngInject */
    constructor(UsersRestService) {

        UsersRestService.getAll()
            .then(users => {
                this.users = users;
            });
    }
}
export default  {
    templateUrl: template,
    controller: Controller
}
