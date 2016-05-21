(function () {
  'use strict';

  angular
    .module('blocks.logger')
    .service('logger', logger);

  /* @ngInject */
  function logger($log, toastr, loggerConfig) {
    var service = {
      error: error,
      info: info,
      success: success,
      warning: warning,

      // straight to console; bypass toastr
      log: $log.log,
      debug: $log.debug,
    };

    return service;
    /////////////////////

    function error(message, data, title) {
      if (loggerConfig.toast.enabled) {
        toastr.error(message, title);
      }
      $log.error('Error: ' + message, data);
    }

    function info(message, data, title) {
      if (loggerConfig.toast.enabled) {
        toastr.info(message, title);
      }
      $log.info('Info: ' + message, data);
    }

    function success(message, data, title) {
      if (loggerConfig.toast.enabled) {
        toastr.success(message, title);
      }
      $log.info('Success: ' + message, data);
    }

    function warning(message, data, title) {
      if (loggerConfig.toast.enabled) {
        toastr.warning(message, title);
      }
      $log.warn('Warning: ' + message, data);
    }

  }
} ());
