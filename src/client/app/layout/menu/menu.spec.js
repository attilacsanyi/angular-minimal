/* jshint -W117 */
describe('appMenu component: ', function () {
  var controller;

  beforeEach(function () {
    bard.appModule('app.layout');
    bard.inject('$rootScope', '$componentController');

    controller = $componentController('appMenu', {
      $scope: $rootScope.$new()
    });
    controller.$onInit();
  });

  it('should have properties', function () {
    expect(controller).to.have.property('isCollapsed');
  });

  it('should have isCollapsed true', function () {
    expect(controller.isCollapsed).to.equal(true);
  });

});
