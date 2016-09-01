import appSettings from '../app.settings';

import LettersRestService from './letters-services/letters-rest.service';

import lettersListComponent from './letters-list/letters-list.component';
import lettersFormComponent from './letters-form/letters-form.component';
import letterItemComponent from './letter-item/letters-item.component';

angular.module(appSettings.moduleName)
    .service('LettersRestService', LettersRestService)
    .component('lettersList', lettersListComponent)
    .component('lettersForm', lettersFormComponent)
    .component('letterItem', letterItemComponent);

