"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticationType = void 0;

var _ApiClient = require("../ApiClient");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuthenticationType model module.
 * @module model/AuthenticationType
 * @version 0.0.1
 */
var AuthenticationType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthenticationType</code>.
   * information about authentication details in order to access the required data
   * @alias module:model/AuthenticationType
   * @class
   */
  function AuthenticationType() {
    _classCallCheck(this, AuthenticationType);
  }
  /**
   * Constructs a <code>AuthenticationType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationType} obj Optional instance to populate.
   * @return {module:model/AuthenticationType} The populated <code>AuthenticationType</code> instance.
   */


  _createClass(AuthenticationType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthenticationType();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('username')) obj.username = _ApiClient.ApiClient.convertToType(data['username'], 'String');
        if (data.hasOwnProperty('password')) obj.password = _ApiClient.ApiClient.convertToType(data['password'], 'String');
        if (data.hasOwnProperty('keycloakUrl')) obj.keycloakUrl = _ApiClient.ApiClient.convertToType(data['keycloakUrl'], 'String');
        if (data.hasOwnProperty('keycloakRealm')) obj.keycloakRealm = _ApiClient.ApiClient.convertToType(data['keycloakRealm'], 'String');
        if (data.hasOwnProperty('keycloakClientId')) obj.keycloakClientId = _ApiClient.ApiClient.convertToType(data['keycloakClientId'], 'String');
      }

      return obj;
    }
  }]);

  return AuthenticationType;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */


exports.AuthenticationType = AuthenticationType;
AuthenticationType.TypeEnum = {
  /**
   * value: "BASICAUTH"
   * @const
   */
  BASICAUTH: "BASICAUTH",

  /**
   * value: "KEYCLOAK"
   * @const
   */
  KEYCLOAK: "KEYCLOAK"
};
/**
 * the authentication type
 * @member {module:model/AuthenticationType.TypeEnum} type
 */

AuthenticationType.prototype.type = undefined;
/**
 * the user name to authenticate against KomMonitor instance
 * @member {String} username
 */

AuthenticationType.prototype.username = undefined;
/**
 * the user password to authenticate against KomMonitor instance (encrypted)
 * @member {String} password
 */

AuthenticationType.prototype.password = undefined;
/**
 * optional url of Keycloak instance URL to authenticate if type='KEYCLOAK'
 * @member {String} keycloakUrl
 */

AuthenticationType.prototype.keycloakUrl = undefined;
/**
 * optional name of Keycloak realm to authenticate if type='KEYCLOAK'
 * @member {String} keycloakRealm
 */

AuthenticationType.prototype.keycloakRealm = undefined;
/**
 * optional clientId of Keycloak realm to authenticate if type='KEYCLOAK'
 * @member {String} keycloakClientId
 */

AuthenticationType.prototype.keycloakClientId = undefined;