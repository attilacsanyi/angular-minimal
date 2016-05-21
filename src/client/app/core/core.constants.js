(function () {
  'use strict';

  var config = {
    appErrorPrefix: '[angularMinimal Error] ',
    appTitle: 'angularMinimal',

    // App settings
    app: {
      copyright: 2016,
    },
  };

  angular
    .module('app.core')
    .constant('config', config);
})();
