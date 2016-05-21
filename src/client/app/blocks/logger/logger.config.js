/* global toastr:true */
(function () {
  'use strict';

  var loggerConfig = {

    // Console debug enabled
    isDebugEnabled: true,

    // Toast notifications
    toast: {
      enabled: true,
      duration: 4000, // How long the toast will display without user interaction
      displayTimeout: 1000 // How long the toast will display after a user hovers over it
    }
  };

  angular
    .module('blocks.logger')
    .config(configure);

  /* @ngInject */
  function configure(loggerConfig, toastr, $logProvider) {

    // Toastr config
    toastr.options.timeOut = loggerConfig.toast.duration;
    toastr.options.extendedTimeOut = loggerConfig.toast.displayTimeout;
    toastr.options.positionClass = 'toast-bottom-right';
    toastr.options.closeButton = true;
    toastr.options.closeHtml = '<button><i class="fa fa-trash-o"></i></button>';
    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';
    toastr.options.progressBar = true;

    // Logger config
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(loggerConfig.isDebugEnabled);
    }
  }

  angular
    .module('blocks.logger')
    // Toastr popup logger https://github.com/CodeSeven/toastr
    .constant('toastr', toastr)
    .constant('loggerConfig', loggerConfig);

})();
