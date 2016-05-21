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
    expect(controller).to.have.property('navline');
  });

  it('should have isCollapsed true', function () {
    expect(controller.isCollapsed).to.equal(true);
  });

  describe('should have proper navline', function () {

    it('should have app title', function () {
      expect(controller.navline.title).to.equal('angularMinimal');
    });

    it('should have app text', function () {
      expect(controller.navline.text).to.equal('Angular Minimal');
    });

  });

});
