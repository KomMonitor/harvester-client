"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummaryType = void 0;

var _ApiClient = require("../ApiClient");

var _SummaryTypeErrorsOccurred = require("./SummaryTypeErrorsOccurred");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SummaryType model module.
 * @module model/SummaryType
 * @version 0.0.1
 */
var SummaryType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SummaryType</code>.
   * generic summary information about harvested data
   * @alias module:model/SummaryType
   * @class
   */
  function SummaryType() {
    _classCallCheck(this, SummaryType);
  }
  /**
   * Constructs a <code>SummaryType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummaryType} obj Optional instance to populate.
   * @return {module:model/SummaryType} The populated <code>SummaryType</code> instance.
   */


  _createClass(SummaryType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SummaryType();
        if (data.hasOwnProperty('sourceDatasetName')) obj.sourceDatasetName = _ApiClient.ApiClient.convertToType(data['sourceDatasetName'], 'String');
        if (data.hasOwnProperty('sourceDatasetId')) obj.sourceDatasetId = _ApiClient.ApiClient.convertToType(data['sourceDatasetId'], 'String');
        if (data.hasOwnProperty('targetDatasetName')) obj.targetDatasetName = _ApiClient.ApiClient.convertToType(data['targetDatasetName'], 'String');
        if (data.hasOwnProperty('targetDatasetId')) obj.targetDatasetId = _ApiClient.ApiClient.convertToType(data['targetDatasetId'], 'String');
        if (data.hasOwnProperty('harvestProcessResult')) obj.harvestProcessResult = _ApiClient.ApiClient.convertToType(data['harvestProcessResult'], 'String');
        if (data.hasOwnProperty('errorsOccurred')) obj.errorsOccurred = _ApiClient.ApiClient.convertToType(data['errorsOccurred'], [_SummaryTypeErrorsOccurred.SummaryTypeErrorsOccurred]);
      }

      return obj;
    }
  }]);

  return SummaryType;
}();
/**
 * the name of the imported  source dataset.
 * @member {String} sourceDatasetName
 */


exports.SummaryType = SummaryType;
SummaryType.prototype.sourceDatasetName = undefined;
/**
 * the id of the imported  source dataset.
 * @member {String} sourceDatasetId
 */

SummaryType.prototype.sourceDatasetId = undefined;
/**
 * the name of the target dataset.
 * @member {String} targetDatasetName
 */

SummaryType.prototype.targetDatasetName = undefined;
/**
 * the id of the target dataset.
 * @member {String} targetDatasetId
 */

SummaryType.prototype.targetDatasetId = undefined;
/**
 * Allowed values for the <code>harvestProcessResult</code> property.
 * @enum {String}
 * @readonly
 */

SummaryType.HarvestProcessResultEnum = {
  /**
   * value: "COMPLETED WITHOUT ERRORS"
   * @const
   */
  COMPLETED_WITHOUT_ERRORS: "COMPLETED WITHOUT ERRORS",

  /**
   * value: "ERRORS OCCURRED"
   * @const
   */
  ERRORS_OCCURRED: "ERRORS OCCURRED"
};
/**
 * shows information about whether the harvest process of this dataset completed without errors or whether something went wrong
 * @member {module:model/SummaryType.HarvestProcessResultEnum} harvestProcessResult
 */

SummaryType.prototype.harvestProcessResult = undefined;
/**
 * @member {Array.<module:model/SummaryTypeErrorsOccurred>} errorsOccurred
 */

SummaryType.prototype.errorsOccurred = undefined;