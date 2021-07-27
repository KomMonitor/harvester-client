"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeriodOfValidityType = void 0;

var _ApiClient = require("../ApiClient");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PeriodOfValidityType model module.
 * @module model/PeriodOfValidityType
 * @version 0.0.1
 */
var PeriodOfValidityType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PeriodOfValidityType</code>.
   * period of validity information for spatial features
   * @alias module:model/PeriodOfValidityType
   * @class
   */
  function PeriodOfValidityType() {
    _classCallCheck(this, PeriodOfValidityType);
  }
  /**
   * Constructs a <code>PeriodOfValidityType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeriodOfValidityType} obj Optional instance to populate.
   * @return {module:model/PeriodOfValidityType} The populated <code>PeriodOfValidityType</code> instance.
   */


  _createClass(PeriodOfValidityType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PeriodOfValidityType();
        if (data.hasOwnProperty('validStartDate')) obj.validStartDate = _ApiClient.ApiClient.convertToType(data['validStartDate'], 'Date');
        if (data.hasOwnProperty('validEndDate')) obj.validEndDate = _ApiClient.ApiClient.convertToType(data['validEndDate'], 'Date');
      }

      return obj;
    }
  }]);

  return PeriodOfValidityType;
}();
/**
 * start date of harvested features
 * @member {Date} validStartDate
 */


exports.PeriodOfValidityType = PeriodOfValidityType;
PeriodOfValidityType.prototype.validStartDate = undefined;
/**
 * end date of harvested features
 * @member {Date} validEndDate
 */

PeriodOfValidityType.prototype.validEndDate = undefined;