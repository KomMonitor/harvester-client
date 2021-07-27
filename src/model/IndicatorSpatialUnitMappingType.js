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
 * The IndicatorSpatialUnitMappingType model module.
 * @module model/IndicatorSpatialUnitMappingType
 * @version 0.0.1
 */
export class IndicatorSpatialUnitMappingType {
  /**
   * Constructs a new <code>IndicatorSpatialUnitMappingType</code>.
   * Mapping of certain indicator timeseries data of specific spatial unit
   * @alias module:model/IndicatorSpatialUnitMappingType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IndicatorSpatialUnitMappingType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndicatorSpatialUnitMappingType} obj Optional instance to populate.
   * @return {module:model/IndicatorSpatialUnitMappingType} The populated <code>IndicatorSpatialUnitMappingType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IndicatorSpatialUnitMappingType();
      if (data.hasOwnProperty('sourceSpatialUnitDatasetId'))
        obj.sourceSpatialUnitDatasetId = ApiClient.convertToType(data['sourceSpatialUnitDatasetId'], 'String');
      if (data.hasOwnProperty('targetSpatialUnitDatasetId'))
        obj.targetSpatialUnitDatasetId = ApiClient.convertToType(data['targetSpatialUnitDatasetId'], 'String');
    }
    return obj;
  }
}

/**
 * id of spatial unit dataset from source KomMonitor instance
 * @member {String} sourceSpatialUnitDatasetId
 */
IndicatorSpatialUnitMappingType.prototype.sourceSpatialUnitDatasetId = undefined;

/**
 * id of spatial unit dataset from target KomMonitor instance
 * @member {String} targetSpatialUnitDatasetId
 */
IndicatorSpatialUnitMappingType.prototype.targetSpatialUnitDatasetId = undefined;

