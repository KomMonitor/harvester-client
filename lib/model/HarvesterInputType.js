"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HarvesterInputType = void 0;

var _ApiClient = require("../ApiClient");

var _DataMappingType = require("./DataMappingType");

var _KomMonitorInstanceType = require("./KomMonitorInstanceType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HarvesterInputType model module.
 * @module model/HarvesterInputType
 * @version 0.0.1
 */
var HarvesterInputType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HarvesterInputType</code>.
   * required input parameters to execute a customizable indicator computation
   * @alias module:model/HarvesterInputType
   * @class
   */
  function HarvesterInputType() {
    _classCallCheck(this, HarvesterInputType);
  }
  /**
   * Constructs a <code>HarvesterInputType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HarvesterInputType} obj Optional instance to populate.
   * @return {module:model/HarvesterInputType} The populated <code>HarvesterInputType</code> instance.
   */


  _createClass(HarvesterInputType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HarvesterInputType();
        if (data.hasOwnProperty('sourceInstance')) obj.sourceInstance = _KomMonitorInstanceType.KomMonitorInstanceType.constructFromObject(data['sourceInstance']);
        if (data.hasOwnProperty('targetInstance')) obj.targetInstance = _KomMonitorInstanceType.KomMonitorInstanceType.constructFromObject(data['targetInstance']);
        if (data.hasOwnProperty('dataMapping')) obj.dataMapping = _DataMappingType.DataMappingType.constructFromObject(data['dataMapping']);
      }

      return obj;
    }
  }]);

  return HarvesterInputType;
}();
/**
 * @member {module:model/KomMonitorInstanceType} sourceInstance
 */


exports.HarvesterInputType = HarvesterInputType;
HarvesterInputType.prototype.sourceInstance = undefined;
/**
 * @member {module:model/KomMonitorInstanceType} targetInstance
 */

HarvesterInputType.prototype.targetInstance = undefined;
/**
 * @member {module:model/DataMappingType} dataMapping
 */

HarvesterInputType.prototype.dataMapping = undefined;