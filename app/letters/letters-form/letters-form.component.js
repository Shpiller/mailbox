import template from './letters-form.html';
import './letters-form.scss';

import appSettings from '../../app.settings';

class Controller {

    /** @ngInject */
    constructor() {


    }

    cancel() {
        window.history.go(-1);
    }
}

export default {
    bindings: {
        user: '<',
        userMailboxes: '<'
    },
    templateUrl: template,
    controller: Controller
}
