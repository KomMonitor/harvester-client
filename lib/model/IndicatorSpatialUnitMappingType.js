"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndicatorSpatialUnitMappingType = void 0;

var _ApiClient = require("../ApiClient");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IndicatorSpatialUnitMappingType model module.
 * @module model/IndicatorSpatialUnitMappingType
 * @version 0.0.1
 */
var IndicatorSpatialUnitMappingType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IndicatorSpatialUnitMappingType</code>.
   * Mapping of certain indicator timeseries data of specific spatial unit
   * @alias module:model/IndicatorSpatialUnitMappingType
   * @class
   */
  function IndicatorSpatialUnitMappingType() {
    _classCallCheck(this, IndicatorSpatialUnitMappingType);
  }
  /**
   * Constructs a <code>IndicatorSpatialUnitMappingType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndicatorSpatialUnitMappingType} obj Optional instance to populate.
   * @return {module:model/IndicatorSpatialUnitMappingType} The populated <code>IndicatorSpatialUnitMappingType</code> instance.
   */


  _createClass(IndicatorSpatialUnitMappingType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndicatorSpatialUnitMappingType();
        if (data.hasOwnProperty('sourceSpatialUnitDatasetId')) obj.sourceSpatialUnitDatasetId = _ApiClient.ApiClient.convertToType(data['sourceSpatialUnitDatasetId'], 'String');
        if (data.hasOwnProperty('targetSpatialUnitDatasetId')) obj.targetSpatialUnitDatasetId = _ApiClient.ApiClient.convertToType(data['targetSpatialUnitDatasetId'], 'String');
      }

      return obj;
    }
  }]);

  return IndicatorSpatialUnitMappingType;
}();
/**
 * id of spatial unit dataset from source KomMonitor instance
 * @member {String} sourceSpatialUnitDatasetId
 */


exports.IndicatorSpatialUnitMappingType = IndicatorSpatialUnitMappingType;
IndicatorSpatialUnitMappingType.prototype.sourceSpatialUnitDatasetId = undefined;
/**
 * id of spatial unit dataset from target KomMonitor instance
 * @member {String} targetSpatialUnitDatasetId
 */

IndicatorSpatialUnitMappingType.prototype.targetSpatialUnitDatasetId = undefined;