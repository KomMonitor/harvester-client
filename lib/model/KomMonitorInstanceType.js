"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KomMonitorInstanceType = void 0;

var _ApiClient = require("../ApiClient");

var _AuthenticationType = require("./AuthenticationType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The KomMonitorInstanceType model module.
 * @module model/KomMonitorInstanceType
 * @version 0.0.1
 */
var KomMonitorInstanceType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>KomMonitorInstanceType</code>.
   * access information about specific KomMonitor instance
   * @alias module:model/KomMonitorInstanceType
   * @class
   * @param url {String} the url to the data management service of the instance.
   */
  function KomMonitorInstanceType(url) {
    _classCallCheck(this, KomMonitorInstanceType);

    this.url = url;
  }
  /**
   * Constructs a <code>KomMonitorInstanceType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KomMonitorInstanceType} obj Optional instance to populate.
   * @return {module:model/KomMonitorInstanceType} The populated <code>KomMonitorInstanceType</code> instance.
   */


  _createClass(KomMonitorInstanceType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new KomMonitorInstanceType();
        if (data.hasOwnProperty('url')) obj.url = _ApiClient.ApiClient.convertToType(data['url'], 'String');
        if (data.hasOwnProperty('authentication')) obj.authentication = _AuthenticationType.AuthenticationType.constructFromObject(data['authentication']);
      }

      return obj;
    }
  }]);

  return KomMonitorInstanceType;
}();
/**
 * the url to the data management service of the instance.
 * @member {String} url
 */


exports.KomMonitorInstanceType = KomMonitorInstanceType;
KomMonitorInstanceType.prototype.url = undefined;
/**
 * @member {module:model/AuthenticationType} authentication
 */

KomMonitorInstanceType.prototype.authentication = undefined;