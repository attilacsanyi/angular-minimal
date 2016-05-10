(function () {
  'use strict';

  angular
    .module('app.layout')
    .component('appMenu', {
      controller: MenuController,
      controllerAs: 'vm',
      templateUrl: 'app/layout/menu/menu.html',
      bindings: {
        'navline': '<'
      }
    });

  /* @ngInject */
  function MenuController() {
    var vm = this;

    // Properties
    vm.isCollapsed = true;

    // Methods
    vm.$onInit = init;

    /////////////////////

    function init() {

    }
  }
})();
