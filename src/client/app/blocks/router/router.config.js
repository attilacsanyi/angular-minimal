(function () {
  'use strict';

  /**
   * ComponentRouter
   */
  angular
    .module('blocks.router')
    .config(configure);

  /* @ngInject */
  function configure($locationProvider) {
    $locationProvider.html5Mode(true);
  }

  /**
   * Root Component
   */
  angular
    .module('blocks.router')
    .value('$routerRootComponent', 'appShell');
})();
