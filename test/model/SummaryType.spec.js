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
    describe('SummaryType', function() {
      beforeEach(function() {
        instance = new KomMonitorHarvesterApi.SummaryType();
      });

      it('should create an instance of SummaryType', function() {
        // TODO: update the code to test SummaryType
        expect(instance).to.be.a(KomMonitorHarvesterApi.SummaryType);
      });

      it('should have the property sourceDatasetName (base name: "sourceDatasetName")', function() {
        // TODO: update the code to test the property sourceDatasetName
        expect(instance).to.have.property('sourceDatasetName');
        // expect(instance.sourceDatasetName).to.be(expectedValueLiteral);
      });

      it('should have the property sourceDatasetId (base name: "sourceDatasetId")', function() {
        // TODO: update the code to test the property sourceDatasetId
        expect(instance).to.have.property('sourceDatasetId');
        // expect(instance.sourceDatasetId).to.be(expectedValueLiteral);
      });

      it('should have the property targetDatasetName (base name: "targetDatasetName")', function() {
        // TODO: update the code to test the property targetDatasetName
        expect(instance).to.have.property('targetDatasetName');
        // expect(instance.targetDatasetName).to.be(expectedValueLiteral);
      });

      it('should have the property targetDatasetId (base name: "targetDatasetId")', function() {
        // TODO: update the code to test the property targetDatasetId
        expect(instance).to.have.property('targetDatasetId');
        // expect(instance.targetDatasetId).to.be(expectedValueLiteral);
      });

      it('should have the property harvestProcessResult (base name: "harvestProcessResult")', function() {
        // TODO: update the code to test the property harvestProcessResult
        expect(instance).to.have.property('harvestProcessResult');
        // expect(instance.harvestProcessResult).to.be(expectedValueLiteral);
      });

      it('should have the property errorsOccurred (base name: "errorsOccurred")', function() {
        // TODO: update the code to test the property errorsOccurred
        expect(instance).to.have.property('errorsOccurred');
        // expect(instance.errorsOccurred).to.be(expectedValueLiteral);
      });

    });
  });

}));
