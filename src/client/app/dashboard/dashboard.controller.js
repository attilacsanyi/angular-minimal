(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .component('appDashboard', {
      controller: DashboardController,
      controllerAs: 'vm',
      templateUrl: 'app/dashboard/dashboard.html'
    });

  /* @ngInject */
  function DashboardController(dataservice, logger) {
    var vm = this;

    // APIs
    vm.people = [];

    // Methods
    vm.$onInit = ngOnInit;

    /////////////////////

    /**
     * Initialisation.
     */
    function ngOnInit() {
      getPeople().then(function () {
        logger.debug('Activated Dashboard');
      });
    }

    /**
     * Get people
     */
    function getPeople() {
      return dataservice.getPeople().then(function (data) {
        vm.people = data;
        return vm.people;
      });
    }
  }
})();

