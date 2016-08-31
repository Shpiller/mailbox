import appSettings from '../app.settings';

import mailboxesWorkflowComponent from './mailboxes-workflow/mailboxes-workflow.component';

angular.module(appSettings.moduleName)
    .component('mailboxesWorkflow', mailboxesWorkflowComponent);

