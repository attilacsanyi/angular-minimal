(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .component('appDashboardDetail', {
      controller: DashboardDetailController,
      controllerAs: 'vm',
      templateUrl: 'app/dashboard/detail/dashboard-detail.html'
    });

  /* @ngInject */
  function DashboardDetailController(dataservice, logger) {
    var vm = this;

    // APIs
    vm.person = {};

    // Methods
    vm.$onInit = ngOnInit;
    vm.$routerOnActivate = routerOnActivate;

    /////////////////////

    /**
     * Initialisation.
     */
    function ngOnInit() {
    }

    function routerOnActivate(next, previous) {
      logger.debug('Details - routerOnActivate');
      var firstName = next.params.name;

      return dataservice.getPersonByFirstName(firstName).then(function (person) {
        vm.person = person;
        // return vm.person;
      });
    }

  }
})();
