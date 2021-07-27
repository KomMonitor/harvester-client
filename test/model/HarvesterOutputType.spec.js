/*
 * KomMonitor Harvester API
 * KomMonitor Harvester API to harvest/transfer spatial data from one instance to another
 *
 * OpenAPI spec version: 0.0.1
 * Contact: christian.danowski-buhren@hs-bochum.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.27
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KomMonitorHarvesterApi);
  }
}(this, function(expect, KomMonitorHarvesterApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('HarvesterOutputType', function() {
      beforeEach(function() {
        instance = new KomMonitorHarvesterApi.HarvesterOutputType();
      });

      it('should create an instance of HarvesterOutputType', function() {
        // TODO: update the code to test HarvesterOutputType
        expect(instance).to.be.a(KomMonitorHarvesterApi.HarvesterOutputType);
      });

      it('should have the property spatialUnitSummary (base name: "spatialUnitSummary")', function() {
        // TODO: update the code to test the property spatialUnitSummary
        expect(instance).to.have.property('spatialUnitSummary');
        // expect(instance.spatialUnitSummary).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorSummary (base name: "indicatorSummary")', function() {
        // TODO: update the code to test the property indicatorSummary
        expect(instance).to.have.property('indicatorSummary');
        // expect(instance.indicatorSummary).to.be(expectedValueLiteral);
      });

    });
  });

}));
