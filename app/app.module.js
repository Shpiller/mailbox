import 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import appSettings from './app.settings';

import AllRestService from './services/all-rest.service';

angular.module(appSettings.moduleName, ['ui.router', 'ngCookies'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/workflow');

        $stateProvider
            .state('mailboxes', {
                url: '/',
                abstract: true,
                template: '<mailboxes></mailboxes>'
            })
            .state('mailboxes.workflow', {
                url: 'workflow',
                template: '<mailboxes-workflow user="$ctrl.user"></mailboxes-workflow>'
            })
            .state('mailboxes.workflow.users', {
                url: '/users',
                template: '<users-list></users-list>'
            })
            .state('mailboxes.workflow.letters', {
                url: '/letters?mailboxId',
                template: '<letters-list mailbox-id="mailboxId"></letters-list>',
                controller: /** @ngInject */ function($scope, $stateParams) {
                    $scope.mailboxId = $stateParams.mailboxId;
                }
            })
            .state('mailboxes.workflow.letter', {
                url: '/letter?letterId',
                template: '<letters-full letter-id="letterId"></letters-full>',
                controller: /** @ngInject */ function($scope, $stateParams) {
                    $scope.letterId = $stateParams.letterId;
                }
            })
            .state('mailboxes.workflow.letters-form', {
                url: '/newletter',
                template: '<letters-form user="$ctrl.user" user-mailboxes="$ctrl.userMailboxes"></letters-form>'
            })
            .state('mailboxes.workflow.user', {
                url: '/user?userId',
                template: '<users-view user-id="userId"></users-view>',
                controller: /** @ngInject */ function($scope, $stateParams) {
                    $scope.userId = $stateParams.userId;
                }
            })
            .state('mailboxes.profile', {
                url: 'profile',
                template: '<users-profile user="$ctrl.user"></users-profile>'
            })
            .state('signin', {
                url: '/signin',
                template: '<users-signin></users-signin>'
            })
            .state('signup', {
                url: '/signup',
                template: '<users-signup></users-signup>'
            });
    })
    .run(function ($rootScope, UsersAuthService, $state) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log('$stateChangeStart');
            console.log(arguments);

            if (toState.name !== 'signin' &&
                toState.name !== 'signup' &&
                !UsersAuthService.isAuth()) {

                event.preventDefault();
                $state.go('signin');
            }

            if ((toState.name === 'signin' ||
                toState.name === 'signup') &&
                UsersAuthService.isAuth()) {

                event.preventDefault();
                $state.go('mailboxes.workflow', {}, {reload: true});
            }
        });
    })
    .service('AllRestService', AllRestService);
