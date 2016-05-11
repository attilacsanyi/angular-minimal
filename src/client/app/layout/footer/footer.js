(function () {
  'use strict';

  angular
    .module('app.layout')
    .component('appFooter', {
      controller: FooterController,
      controllerAs: 'vm',
      templateUrl: 'app/layout/footer/footer.html'
    });

  /* @ngInject */
  function FooterController() {
    var vm = this;

    // Properties

    // Methods
    vm.$onInit = init;

    /////////////////////

    function init() {
    }
  }
})();
