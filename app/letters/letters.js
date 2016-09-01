import appSettings from '../app.settings';

import LettersRestService from './letters-services/letters-rest.service';

import lettersListComponent from './letters-list/letters-list.component';
import lettersFormComponent from './letters-form/letters-form.component';
import lettersItemComponent from './letters-item/letters-item.component';
import lettersFullComponent from './letters-full/letters-full.component';

angular.module(appSettings.moduleName)
    .service('LettersRestService', LettersRestService)
    .component('lettersList', lettersListComponent)
    .component('lettersForm', lettersFormComponent)
    .component('lettersItem', lettersItemComponent)
    .component('lettersFull', lettersFullComponent);

