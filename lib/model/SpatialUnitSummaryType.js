"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpatialUnitSummaryType = void 0;

var _ApiClient = require("../ApiClient");

var _SummaryType2 = require("./SummaryType");

var _SummaryTypeErrorsOccurred = require("./SummaryTypeErrorsOccurred");

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
 * The SpatialUnitSummaryType model module.
 * @module model/SpatialUnitSummaryType
 * @version 0.0.1
 */
var SpatialUnitSummaryType = /*#__PURE__*/function (_SummaryType) {
  _inherits(SpatialUnitSummaryType, _SummaryType);

  var _super = _createSuper(SpatialUnitSummaryType);

  /**
   * Constructs a new <code>SpatialUnitSummaryType</code>.
   * @alias module:model/SpatialUnitSummaryType
   * @class
   * @extends module:model/SummaryType
   */
  function SpatialUnitSummaryType() {
    _classCallCheck(this, SpatialUnitSummaryType);

    return _super.call(this);
  }
  /**
   * Constructs a <code>SpatialUnitSummaryType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpatialUnitSummaryType} obj Optional instance to populate.
   * @return {module:model/SpatialUnitSummaryType} The populated <code>SpatialUnitSummaryType</code> instance.
   */


  _createClass(SpatialUnitSummaryType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpatialUnitSummaryType();

        _SummaryType2.SummaryType.constructFromObject(data, obj);

        if (data.hasOwnProperty('numberOfHarvestedFeatures')) obj.numberOfHarvestedFeatures = _ApiClient.ApiClient.convertToType(data['numberOfHarvestedFeatures'], 'Number');
      }

      return obj;
    }
  }]);

  return SpatialUnitSummaryType;
}(_SummaryType2.SummaryType);
/**
 * @member {Number} numberOfHarvestedFeatures
 */


exports.SpatialUnitSummaryType = SpatialUnitSummaryType;
SpatialUnitSummaryType.prototype.numberOfHarvestedFeatures = undefined;