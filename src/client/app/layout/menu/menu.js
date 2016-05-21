(function () {
  'use strict';

  angular
    .module('app.layout')
    .component('appMenu', {
      controller: MenuController,
      controllerAs: 'vm',
      templateUrl: 'app/layout/menu/menu.html'
    });

  /* @ngInject */
  function MenuController(config) {
    var vm = this;

    // Properties
    vm.isCollapsed = false;
    vm.navline = {};

    // Methods
    vm.$onInit = ngOnInit;

    /////////////////////

    function ngOnInit() {
      vm.isCollapsed = true;
      vm.navline = {
        title: config.appTitle,
        text: 'Angular Minimal',
      };
    }
  }
})();
