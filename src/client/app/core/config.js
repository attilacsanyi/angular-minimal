(function () {
  'use strict';

  var core = angular.module('app.core');

  var config = {
    appErrorPrefix: '[angularMinimal Error] ',
    appTitle: 'angularMinimal'
  };

  core.value('config', config);

  core.config(configure);

  /* @ngInject */
  function configure(exceptionHandlerProvider) {
    exceptionHandlerProvider.configure(config.appErrorPrefix);
  }

})();
