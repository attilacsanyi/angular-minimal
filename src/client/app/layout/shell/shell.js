(function () {
  'use strict';

  angular
    .module('app.layout')
    .component('appShell', {
      controller: ShellController,
      controllerAs: 'vm',
      templateUrl: 'app/layout/shell/shell.html',
      $routeConfig: [
        { path: '/...', name: 'Dashboard', component: 'appDashboard', useAsDefault: true },
        { path: '/', redirectTo: ['Dashboard'] },
        { path: '/**', name: '404', component: 'page404' }
      ]
    });

  /* @ngInject */
  function ShellController($rootScope, $timeout, config) {
    var vm = this;

    $rootScope.showSplash = true;

    // APIs
    vm.navline = {
      title: config.appTitle,
      text: 'Created by John Papa1',
      link: 'http://twitter.com/john_papa'
    };

    // Methods
    vm.$onInit = ngOnInit;

    /////////////////////

    function ngOnInit() {
      hideSplash();
    }

    /**
     * Force a delay so we can see the splash screen.
     */
    function hideSplash() {
      $timeout(function () {
        $rootScope.showSplash = false;
      }, 1500);
    }
  }
})();
