/* jshint -W117, -W030 */
describe('LoggerFacory', function () {
  var controller;

  beforeEach(function () {
    bard.appModule('blocks.logger');
    bard.inject('logger', 'loggerConfig');
  });

  describe('Factory', function () {

    it('should be created successfully', function () {
      expect(logger).to.be.defined;
    });

    it('should have api', function () {
      expect(logger).to.have.property('error');
      expect(logger).to.have.property('info');
      expect(logger).to.have.property('success');
      expect(logger).to.have.property('warning');
      expect(logger).to.have.property('log');
      expect(logger).to.have.property('debug');
    });

    describe('should have config', function () {

      describe('should have toaster settings', function () {

        it('should debug enabled', function () {
          expect(loggerConfig.isDebugEnabled).to.be.true;
        });

        it('should toaster enabled', function () {
          expect(loggerConfig.toast.enabled).to.be.true;
        });

        it('should toaster duration 4 seconds', function () {
          expect(loggerConfig.toast.duration).to.equals(4000);
        });

      });
    });

  });
});
