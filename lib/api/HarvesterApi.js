"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HarvesterApi = void 0;

var _ApiClient = require("../ApiClient");

var _HarvesterInputType = require("../model/HarvesterInputType");

var _HarvesterOutputType = require("../model/HarvesterOutputType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Harvester service.
* @module api/HarvesterApi
* @version 0.0.1
*/
var HarvesterApi = /*#__PURE__*/function () {
  /**
  * Constructs a new HarvesterApi. 
  * @alias module:api/HarvesterApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function HarvesterApi(apiClient) {
    _classCallCheck(this, HarvesterApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the executeHarvesting operation.
   * @callback moduleapi/HarvesterApi~executeHarvestingCallback
   * @param {String} error Error message, if any.
   * @param {module:model/HarvesterOutputType{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Perform harvesting process according to submitted config.
   * Perform harvesting process according to submitted config.
   * @param {module:model/HarvesterInputType} body details necessary to execute harvesting process
   * @param {module:api/HarvesterApi~executeHarvestingCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */


  _createClass(HarvesterApi, [{
    key: "executeHarvesting",
    value: function executeHarvesting(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executeHarvesting");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _HarvesterOutputType.HarvesterOutputType;
      return this.apiClient.callApi('/harvest/execute', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return HarvesterApi;
}();

exports.HarvesterApi = HarvesterApi;