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
  function DashboardController($q, dataservice, logger) {
    var vm = this;

    // APIs
    vm.people = [];

    // Methods
    vm.$onInit = init;

    /////////////////////

    /**
     * Initialisation.
     */
    function init() {
      var promises = [getPeople()];
      return $q.all(promises).then(function () {
        logger.info('Activated Dashboard View');
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

