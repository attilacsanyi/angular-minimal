/* jshint -W117 */
describe('DashboardHome component: ', function () {
  var controller;

  beforeEach(function () {
    bard.appModule('app.dashboard');
    bard.inject('$rootScope', '$componentController');

    controller = $componentController('appDashboardHome', {
      $scope: $rootScope.$new()
    });

  });

  it('should have properties', function () {
    expect(controller).to.have.property('people');
  });

});
