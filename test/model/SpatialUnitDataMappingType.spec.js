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
    describe('SpatialUnitDataMappingType', function() {
      beforeEach(function() {
        instance = new KomMonitorHarvesterApi.SpatialUnitDataMappingType();
      });

      it('should create an instance of SpatialUnitDataMappingType', function() {
        // TODO: update the code to test SpatialUnitDataMappingType
        expect(instance).to.be.a(KomMonitorHarvesterApi.SpatialUnitDataMappingType);
      });

      it('should have the property targetPeriodOfValidity (base name: "targetPeriodOfValidity")', function() {
        // TODO: update the code to test the property targetPeriodOfValidity
        expect(instance).to.have.property('targetPeriodOfValidity');
        // expect(instance.targetPeriodOfValidity).to.be(expectedValueLiteral);
      });

    });
  });

}));
