import appSettings from '../app.settings';

import MailboxesRestService from './mailboxes-services/mailboxes-rest.service';

import mailboxesComponent from './mailboxes.component';
import mailboxesWorkflowComponent from './mailboxes-workflow/mailboxes-workflow.component';

angular.module(appSettings.moduleName)
    .service('MailboxesRestService', MailboxesRestService)
    .component('mailboxes', mailboxesComponent)
    .component('mailboxesWorkflow', mailboxesWorkflowComponent);

