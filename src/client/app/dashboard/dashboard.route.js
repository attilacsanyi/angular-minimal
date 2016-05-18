(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'dashboard',
        config: {
          url: '/',
          template: '<app-dashboard></app-dashboard>',
          title: 'dashboard',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      }
    ];
  }
})();
