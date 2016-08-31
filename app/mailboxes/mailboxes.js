import appSettings from '../app.settings';

import mailboxesComponent from './mailboxes.component';
import mailboxesWorkflowComponent from './mailboxes-workflow/mailboxes-workflow.component';

angular.module(appSettings.moduleName)
    .component('mailboxes', mailboxesComponent)
    .component('mailboxesWorkflow', mailboxesWorkflowComponent);

