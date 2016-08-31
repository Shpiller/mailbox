import template from './letters-list.html';
import './letters-list.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor() {


    }
}

export default {
    bindings: {
        mailboxid: '<'
    },
    templateUrl: template,
    controller: Controller
}
