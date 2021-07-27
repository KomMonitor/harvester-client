"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataMappingType = void 0;

var _ApiClient = require("../ApiClient");

var _IndicatorDataMappingType = require("./IndicatorDataMappingType");

var _SpatialUnitDataMappingType = require("./SpatialUnitDataMappingType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DataMappingType model module.
 * @module model/DataMappingType
 * @version 0.0.1
 */
var DataMappingType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DataMappingType</code>.
   * data mapping containing the required infos about what data shall be transferred
   * @alias module:model/DataMappingType
   * @class
   */
  function DataMappingType() {
    _classCallCheck(this, DataMappingType);
  }
  /**
   * Constructs a <code>DataMappingType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataMappingType} obj Optional instance to populate.
   * @return {module:model/DataMappingType} The populated <code>DataMappingType</code> instance.
   */


  _createClass(DataMappingType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DataMappingType();
        if (data.hasOwnProperty('spatialUnitMappingDefs')) obj.spatialUnitMappingDefs = _ApiClient.ApiClient.convertToType(data['spatialUnitMappingDefs'], [_SpatialUnitDataMappingType.SpatialUnitDataMappingType]);
        if (data.hasOwnProperty('indicatorMappingDefs')) obj.indicatorMappingDefs = _ApiClient.ApiClient.convertToType(data['indicatorMappingDefs'], [_IndicatorDataMappingType.IndicatorDataMappingType]);
      }

      return obj;
    }
  }]);

  return DataMappingType;
}();
/**
 * array of spatial unit feature mapping definitions
 * @member {Array.<module:model/SpatialUnitDataMappingType>} spatialUnitMappingDefs
 */


exports.DataMappingType = DataMappingType;
DataMappingType.prototype.spatialUnitMappingDefs = undefined;
/**
 * array of indicator feature mapping definitions
 * @member {Array.<module:model/IndicatorDataMappingType>} indicatorMappingDefs
 */

DataMappingType.prototype.indicatorMappingDefs = undefined;