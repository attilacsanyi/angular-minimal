/* jshint -W117 */
describe('appFooter component: ', function () {
  var controller;

  beforeEach(function () {
    bard.appModule('app.layout');
    bard.inject('$rootScope', '$componentController');

    controller = $componentController('appFooter', {
      $scope: $rootScope.$new()
    });
    controller.$onInit();
  });

  it('should have properties', function () {
  });

});
