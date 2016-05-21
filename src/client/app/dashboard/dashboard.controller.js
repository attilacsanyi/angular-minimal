(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .component('appDashboard', {
      controller: DashboardController,
      controllerAs: 'vm',
      templateUrl: 'app/dashboard/dashboard.html',
      $routeConfig: [
        { path: '/', name: 'DashboardHome', component: 'appDashboardHome', useAsDefault: true },
        { path: '/:name', name: 'DashboardDetail', component: 'appDashboardDetail' }
      ]
    });

  /* @ngInject */
  function DashboardController(logger) {
    var vm = this;

    // APIs
    vm.title = '';

    // Methods
    vm.$onInit = ngOnInit;

    /////////////////////

    /**
     * Initialisation.
     */
    function ngOnInit() {
      vm.title = 'Dashboard';
      logger.debug('Dashboard - ngOnInit');
    }

  }
})();
