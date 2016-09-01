import template from './letters-full.html';

import appSettings from '../../app.settings';

class Controller {
    /** @ngInject */
    constructor(LettersRestService) {

        this._LettersRestService = LettersRestService;

        LettersRestService.getOne(this.letterId)
            .then(letter => {
                this.letter = letter;
            });
    }

    cancel() {
        window.history.go(-1);
    }
}

export default {
    bindings: {
        letterId: '<'
    },
    templateUrl: template,
    controller: Controller
}
