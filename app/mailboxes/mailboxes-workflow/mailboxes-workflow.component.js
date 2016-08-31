import template from './mailboxes-workflow.html';
import './mailboxes-workflow.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor() {
    }
}

export default {
    bindings: {
        user: '<'
    },
    templateUrl: template,
    controller: Controller
}
