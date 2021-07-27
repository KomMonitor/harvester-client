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
    describe('HarvesterInputType', function() {
      beforeEach(function() {
        instance = new KomMonitorHarvesterApi.HarvesterInputType();
      });

      it('should create an instance of HarvesterInputType', function() {
        // TODO: update the code to test HarvesterInputType
        expect(instance).to.be.a(KomMonitorHarvesterApi.HarvesterInputType);
      });

      it('should have the property sourceInstance (base name: "sourceInstance")', function() {
        // TODO: update the code to test the property sourceInstance
        expect(instance).to.have.property('sourceInstance');
        // expect(instance.sourceInstance).to.be(expectedValueLiteral);
      });

      it('should have the property targetInstance (base name: "targetInstance")', function() {
        // TODO: update the code to test the property targetInstance
        expect(instance).to.have.property('targetInstance');
        // expect(instance.targetInstance).to.be(expectedValueLiteral);
      });

      it('should have the property dataMapping (base name: "dataMapping")', function() {
        // TODO: update the code to test the property dataMapping
        expect(instance).to.have.property('dataMapping');
        // expect(instance.dataMapping).to.be(expectedValueLiteral);
      });

    });
  });

}));
