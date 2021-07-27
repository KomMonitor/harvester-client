"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpatialUnitDataMappingType = void 0;

var _ApiClient = require("../ApiClient");

var _PeriodOfValidityType = require("./PeriodOfValidityType");

var _SpatialDataMappingType = require("./SpatialDataMappingType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * The SpatialUnitDataMappingType model module.
 * @module model/SpatialUnitDataMappingType
 * @version 0.0.1
 */
var SpatialUnitDataMappingType = /*#__PURE__*/function (_SpatialDataMappingTy) {
  _inherits(SpatialUnitDataMappingType, _SpatialDataMappingTy);

  var _super = _createSuper(SpatialUnitDataMappingType);

  /**
   * Constructs a new <code>SpatialUnitDataMappingType</code>.
   * @alias module:model/SpatialUnitDataMappingType
   * @class
   * @extends module:model/SpatialDataMappingType
   */
  function SpatialUnitDataMappingType() {
    _classCallCheck(this, SpatialUnitDataMappingType);

    return _super.call(this);
  }
  /**
   * Constructs a <code>SpatialUnitDataMappingType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpatialUnitDataMappingType} obj Optional instance to populate.
   * @return {module:model/SpatialUnitDataMappingType} The populated <code>SpatialUnitDataMappingType</code> instance.
   */


  _createClass(SpatialUnitDataMappingType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpatialUnitDataMappingType();

        _SpatialDataMappingType.SpatialDataMappingType.constructFromObject(data, obj);

        if (data.hasOwnProperty('targetPeriodOfValidity')) obj.targetPeriodOfValidity = _PeriodOfValidityType.PeriodOfValidityType.constructFromObject(data['targetPeriodOfValidity']);
      }

      return obj;
    }
  }]);

  return SpatialUnitDataMappingType;
}(_SpatialDataMappingType.SpatialDataMappingType);
/**
 * @member {module:model/PeriodOfValidityType} targetPeriodOfValidity
 */


exports.SpatialUnitDataMappingType = SpatialUnitDataMappingType;
SpatialUnitDataMappingType.prototype.targetPeriodOfValidity = undefined;