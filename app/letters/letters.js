import appSettings from '../app.settings';

import LettersRestService from './letters-services/letters-rest.service';

import lettersListComponent from './letters-list/letters-list.component';

angular.module(appSettings.moduleName)
    .service('LettersRestService', LettersRestService)
    .component('lettersList', lettersListComponent);

