"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpatialDataMappingType = void 0;

var _ApiClient = require("../ApiClient");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpatialDataMappingType model module.
 * @module model/SpatialDataMappingType
 * @version 0.0.1
 */
var SpatialDataMappingType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SpatialDataMappingType</code>.
   * mapping details to transfer certain spatial dataset features from one KomMonitor instance to another
   * @alias module:model/SpatialDataMappingType
   * @class
   */
  function SpatialDataMappingType() {
    _classCallCheck(this, SpatialDataMappingType);
  }
  /**
   * Constructs a <code>SpatialDataMappingType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpatialDataMappingType} obj Optional instance to populate.
   * @return {module:model/SpatialDataMappingType} The populated <code>SpatialDataMappingType</code> instance.
   */


  _createClass(SpatialDataMappingType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpatialDataMappingType();
        if (data.hasOwnProperty('sourceDatasetId')) obj.sourceDatasetId = _ApiClient.ApiClient.convertToType(data['sourceDatasetId'], 'String');
        if (data.hasOwnProperty('targetDatasetId')) obj.targetDatasetId = _ApiClient.ApiClient.convertToType(data['targetDatasetId'], 'String');
        if (data.hasOwnProperty('sourceFeatureIdPrefix')) obj.sourceFeatureIdPrefix = _ApiClient.ApiClient.convertToType(data['sourceFeatureIdPrefix'], 'String');
        if (data.hasOwnProperty('targetFeatureIdPrefix')) obj.targetFeatureIdPrefix = _ApiClient.ApiClient.convertToType(data['targetFeatureIdPrefix'], 'String');
        if (data.hasOwnProperty('sourceFeatureNamePrefix')) obj.sourceFeatureNamePrefix = _ApiClient.ApiClient.convertToType(data['sourceFeatureNamePrefix'], 'String');
        if (data.hasOwnProperty('targetFeatureNamePrefix')) obj.targetFeatureNamePrefix = _ApiClient.ApiClient.convertToType(data['targetFeatureNamePrefix'], 'String');
      }

      return obj;
    }
  }]);

  return SpatialDataMappingType;
}();
/**
 * source dataset id from source KomMonitor instance
 * @member {String} sourceDatasetId
 */


exports.SpatialDataMappingType = SpatialDataMappingType;
SpatialDataMappingType.prototype.sourceDatasetId = undefined;
/**
 * target dataset id from target KomMonitor instance
 * @member {String} targetDatasetId
 */

SpatialDataMappingType.prototype.targetDatasetId = undefined;
/**
 * optional prefix for source dataset feature IDs
 * @member {String} sourceFeatureIdPrefix
 */

SpatialDataMappingType.prototype.sourceFeatureIdPrefix = undefined;
/**
 * optional prefix for target dataset feature IDs
 * @member {String} targetFeatureIdPrefix
 */

SpatialDataMappingType.prototype.targetFeatureIdPrefix = undefined;
/**
 * optional prefix for source dataset feature names
 * @member {String} sourceFeatureNamePrefix
 */

SpatialDataMappingType.prototype.sourceFeatureNamePrefix = undefined;
/**
 * optional prefix for target dataset feature names
 * @member {String} targetFeatureNamePrefix
 */

SpatialDataMappingType.prototype.targetFeatureNamePrefix = undefined;