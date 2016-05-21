/* jshint -W117 */
describe('DashboardDetail component: ', function () {
  var controller;

  beforeEach(function () {
    bard.appModule('app.dashboard');
    bard.inject('$rootScope', '$componentController');

    controller = $componentController('appDashboardDetail', {
      $scope: $rootScope.$new()
    });

  });

  it('should have properties', function () {
    expect(controller).to.have.property('person');
  });

});

