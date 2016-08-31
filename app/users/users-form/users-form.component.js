import template from './users-form.html';
import './users-form.scss';

class Controller {

    /** @ngInject */
    constructor() {
        const sourcethumbs = 'https://randomuser.me/api/portraits/thumb';
        this.menThumbs = Array.from(Array(5).keys()).map(i => `${sourcethumbs}/men/${i+1}.jpg`);
        this.womenThumbs = Array.from(Array(5).keys()).map(i => `${sourcethumbs}/women/${i+1}.jpg`);
    }

    avatarSelect(url) {
        this.user = this.user || {};
        this.user.avatarUrl = url;
    }
}

export default  {
    bindings: {
        user: '='
    },
    templateUrl: template,
    controller: Controller
}
