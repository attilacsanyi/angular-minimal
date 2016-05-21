(function () {
  'use strict';

  angular
    .module('app.layout')
    .component('page404', {
      controller: Page404Controller,
      controllerAs: 'vm',
      templateUrl: 'app/layout/pages/page404.html'
    });

  /* @ngInject */
  function Page404Controller() {
    var vm = this;

    // Properties

    // Methods
    vm.$onInit = ngOnInit;

    /////////////////////

    function ngOnInit() {
    }
  }
})();
