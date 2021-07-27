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
import {ApiClient} from '../ApiClient';

/**
 * The AuthenticationType model module.
 * @module model/AuthenticationType
 * @version 0.0.1
 */
export class AuthenticationType {
  /**
   * Constructs a new <code>AuthenticationType</code>.
   * information about authentication details in order to access the required data
   * @alias module:model/AuthenticationType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AuthenticationType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationType} obj Optional instance to populate.
   * @return {module:model/AuthenticationType} The populated <code>AuthenticationType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuthenticationType();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('keycloakUrl'))
        obj.keycloakUrl = ApiClient.convertToType(data['keycloakUrl'], 'String');
      if (data.hasOwnProperty('keycloakRealm'))
        obj.keycloakRealm = ApiClient.convertToType(data['keycloakRealm'], 'String');
      if (data.hasOwnProperty('keycloakClientId'))
        obj.keycloakClientId = ApiClient.convertToType(data['keycloakClientId'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
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
  KEYCLOAK: "KEYCLOAK",

  /**
   * value: "NONE"
   * @const
   */
   NONE: "NONE"
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

