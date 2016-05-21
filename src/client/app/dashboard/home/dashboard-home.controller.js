(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .component('appDashboardHome', {
      controller: DashboardHomeController,
      controllerAs: 'vm',
      templateUrl: 'app/dashboard/home/dashboard-home.html'
    });

  /* @ngInject */
  function DashboardHomeController(dataservice, logger) {
    var vm = this;

    // APIs
    vm.people = [];

    // Methods
    vm.$onInit = ngOnInit;
    vm.$routerCanReuse = routerCanReuse;
    vm.$routerOnActivate = routerOnActivate;
    vm.$routerCanDeactivate = routerCanDeactivate;
    vm.$routerOnDeactivate = routerOnDeactivate;

    /////////////////////

    /**
     * Initialisation.
     */
    function ngOnInit() {
      getPeople().then(function () {
        logger.success('DashboardHome - ngOnInit');
      });
    }

    function routerOnActivate() {
      logger.debug('DashboardHome - routerOnActivate');
    }

    function routerCanReuse() {
      logger.debug('DashboardHome - routerCanReuse');
    }

    function routerCanDeactivate() {
      logger.debug('DashboardHome - routerCanDeactivate');
    }

    function routerOnDeactivate() {
      logger.debug('DashboardHome - routerOnDeactivate');
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

