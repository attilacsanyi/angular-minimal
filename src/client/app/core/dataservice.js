(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getPeople: getPeople,
      getPersonByFirstName: getPersonByFirstName
    };

    return service;

    function getPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);
    }

    function getPersonByFirstName(firstName) {
      return getPeople().then(function (people) {
        for (var i = 0; i < people.length; i++) {
          if (people[i].firstName === firstName) { return people[i]; }
        }
      });
    }

    function success(response) {
      return response.data;
    }

    function fail(e) {
      return exception.catcher('XHR Failed for getPeople')(e);
    }
  }

})();
