(function () {
  'use strict';

  /**
   * Exception
   */
  angular
    .module('app.core')
    .config(configure);

  /* @ngInject */
  function configure(config, exceptionHandlerProvider) {

    // Exception config
    exceptionHandlerProvider.configure(config.appErrorPrefix);
  }

})();

