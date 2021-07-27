"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummaryTypeErrorsOccurred = void 0;

var _ApiClient = require("../ApiClient");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SummaryTypeErrorsOccurred model module.
 * @module model/SummaryTypeErrorsOccurred
 * @version 0.0.1
 */
var SummaryTypeErrorsOccurred = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SummaryTypeErrorsOccurred</code>.
   * @alias module:model/SummaryTypeErrorsOccurred
   * @class
   */
  function SummaryTypeErrorsOccurred() {
    _classCallCheck(this, SummaryTypeErrorsOccurred);
  }
  /**
   * Constructs a <code>SummaryTypeErrorsOccurred</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummaryTypeErrorsOccurred} obj Optional instance to populate.
   * @return {module:model/SummaryTypeErrorsOccurred} The populated <code>SummaryTypeErrorsOccurred</code> instance.
   */


  _createClass(SummaryTypeErrorsOccurred, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SummaryTypeErrorsOccurred();
        if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
        if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'Number');
      }

      return obj;
    }
  }]);

  return SummaryTypeErrorsOccurred;
}();
/**
 * @member {String} message
 */


exports.SummaryTypeErrorsOccurred = SummaryTypeErrorsOccurred;
SummaryTypeErrorsOccurred.prototype.message = undefined;
/**
 * @member {Number} code
 */

SummaryTypeErrorsOccurred.prototype.code = undefined;