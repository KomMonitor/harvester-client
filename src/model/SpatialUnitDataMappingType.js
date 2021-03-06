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
import {PeriodOfValidityType} from './PeriodOfValidityType';
import {SpatialDataMappingType} from './SpatialDataMappingType';

/**
 * The SpatialUnitDataMappingType model module.
 * @module model/SpatialUnitDataMappingType
 * @version 0.0.1
 */
export class SpatialUnitDataMappingType extends SpatialDataMappingType {
  /**
   * Constructs a new <code>SpatialUnitDataMappingType</code>.
   * @alias module:model/SpatialUnitDataMappingType
   * @class
   * @extends module:model/SpatialDataMappingType
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>SpatialUnitDataMappingType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpatialUnitDataMappingType} obj Optional instance to populate.
   * @return {module:model/SpatialUnitDataMappingType} The populated <code>SpatialUnitDataMappingType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SpatialUnitDataMappingType();
      SpatialDataMappingType.constructFromObject(data, obj);
      if (data.hasOwnProperty('targetPeriodOfValidity'))
        obj.targetPeriodOfValidity = PeriodOfValidityType.constructFromObject(data['targetPeriodOfValidity']);
    }
    return obj;
  }
}

/**
 * @member {module:model/PeriodOfValidityType} targetPeriodOfValidity
 */
SpatialUnitDataMappingType.prototype.targetPeriodOfValidity = undefined;

