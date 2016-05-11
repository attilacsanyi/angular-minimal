/* jshint -W117,-W030 */
describe('appShell component: ', function () {
  var controller;

  beforeEach(function () {
    bard.appModule('app.layout');
    bard.inject('$rootScope', '$componentController', '$timeout');

    controller = $componentController('appShell', {
      $scope: $rootScope.$new()
    });

    controller.$onInit();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Shell controller', function () {
    it('should be created successfully', function () {
      expect(controller).to.be.defined;
    });

    it('should show splash screen', function () {
      expect($rootScope.showSplash).to.be.true;
    });

    it('should hide splash screen after timeout', function (done) {
      $timeout(function () {
        expect($rootScope.showSplash).to.be.false;
        done();
      }, 1500);
      $timeout.flush();
    });
  });

});
