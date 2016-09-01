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

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, reject) {
            console.log('$stateChangeError');
            console.log(arguments);

            if (reject && reject.status === 419) {
                alert(reject.message);
            }
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, resolve) {
            console.log('$stateChangeSuccess');
            console.log(arguments);
        });

        $rootScope.$on('$viewContentLoaded', function (event) {
            console.log('$viewContentLoaded');
            console.log(arguments);
        });

        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
            console.log('$stateNotFound');
            console.log(arguments);
        });
    })
    .service('AllRestService', AllRestService);
