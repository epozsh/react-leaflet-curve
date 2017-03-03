(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-leaflet"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeaflet"] = factory(require("react"), require("react-leaflet"));
	else
		root["ReactLeaflet"] = factory(root["React"], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Curve = undefined;

	var _Curve2 = __webpack_require__(1);

	var _Curve3 = _interopRequireDefault(_Curve2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Curve = _Curve3.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactLeaflet = __webpack_require__(3);

	var _leaflet = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Curve = function (_Path) {
	  _inherits(Curve, _Path);

	  function Curve() {
	    _classCallCheck(this, Curve);

	    return _possibleConstructorReturn(this, (Curve.__proto__ || Object.getPrototypeOf(Curve)).apply(this, arguments));
	  }

	  _createClass(Curve, [{
	    key: 'createLeafletElement',
	    value: function createLeafletElement(props) {
	      var positions = props.positions,
	          option = props.option,
	          options = _objectWithoutProperties(props, ['positions', 'option']);

	      return L.curve(positions, option, this.getOptions(options));
	    }
	  }, {
	    key: 'updateLeafletElement',
	    value: function updateLeafletElement(fromProps, toProps) {
	      if (toProps.positions !== fromProps.positions) {
	        this.leafletElement.setPath(toProps.positions);
	      }
	      this.setStyleIfChanged(fromProps, toProps);
	    }
	  }]);

	  return Curve;
	}(_reactLeaflet.Path);

	/*
	  componentWillMount() {
	    super.componentWillMount();
	    const { positions, ...options } = this.props
	    this.leafletElement = L.curve(positions, this.getOptions(options))
	  }*/


	Curve.propTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  option: _react.PropTypes.object,
	  positions: _react.PropTypes.array.isRequired
	};
	exports.default = Curve;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	L.Curve = L.Path.extend({
		options: {},

		initialize: function initialize(path, options) {
			//1
			L.setOptions(this, options);
			this._initialUpdate = true;
			this._setPath(path);
		},

		getPath: function getPath() {
			return this._coords;
		},

		setPath: function setPath(path, options) {
			this._initialUpdate = true;
			this._setPath(path);
			return this.redraw();
		},

		getBounds: function getBounds() {
			return this._bounds;
		},

		_setPath: function _setPath(path) {
			//2
			this._coords = path;
			this._bounds = this._computeBounds();
		},

		_computeBounds: function _computeBounds() {
			//3
			var bound = new L.LatLngBounds();
			var lastPoint;
			var lastCommand;
			var coord;
			for (var i = 0; i < this._coords.length; i++) {
				coord = this._coords[i];
				if (typeof coord == 'string' || coord instanceof String) {
					lastCommand = coord;
				} else if (lastCommand == 'H') {
					bound.extend([lastPoint.lat, coord[0]]);
					lastPoint = new L.latLng(lastPoint.lat, coord[0]);
				} else if (lastCommand == 'V') {
					bound.extend([coord[0], lastPoint.lng]);
					lastPoint = new L.latLng(coord[0], lastPoint.lng);
				} else if (lastCommand == 'C') {
					var controlPoint1 = new L.latLng(coord[0], coord[1]);
					coord = this._coords[++i];
					var controlPoint2 = new L.latLng(coord[0], coord[1]);
					coord = this._coords[++i];
					var endPoint = new L.latLng(coord[0], coord[1]);

					bound.extend(controlPoint1);
					bound.extend(controlPoint2);
					bound.extend(endPoint);

					endPoint.controlPoint1 = controlPoint1;
					endPoint.controlPoint2 = controlPoint2;
					lastPoint = endPoint;
				} else if (lastCommand == 'S') {
					var controlPoint2 = new L.latLng(coord[0], coord[1]);
					coord = this._coords[++i];
					var endPoint = new L.latLng(coord[0], coord[1]);

					var controlPoint1 = lastPoint;
					if (lastPoint.controlPoint2) {
						var diffLat = lastPoint.lat - lastPoint.controlPoint2.lat;
						var diffLng = lastPoint.lng - lastPoint.controlPoint2.lng;
						controlPoint1 = new L.latLng(lastPoint.lat + diffLat, lastPoint.lng + diffLng);
					}

					bound.extend(controlPoint1);
					bound.extend(controlPoint2);
					bound.extend(endPoint);

					endPoint.controlPoint1 = controlPoint1;
					endPoint.controlPoint2 = controlPoint2;
					lastPoint = endPoint;
				} else if (lastCommand == 'Q') {
					var controlPoint = new L.latLng(coord[0], coord[1]);
					coord = this._coords[++i];
					var endPoint = new L.latLng(coord[0], coord[1]);

					bound.extend(controlPoint);
					bound.extend(endPoint);

					endPoint.controlPoint = controlPoint;
					lastPoint = endPoint;
				} else if (lastCommand == 'T') {
					var endPoint = new L.latLng(coord[0], coord[1]);

					var controlPoint = lastPoint;
					if (lastPoint.controlPoint) {
						var diffLat = lastPoint.lat - lastPoint.controlPoint.lat;
						var diffLng = lastPoint.lng - lastPoint.controlPoint.lng;
						controlPoint = new L.latLng(lastPoint.lat + diffLat, lastPoint.lng + diffLng);
					}

					bound.extend(controlPoint);
					bound.extend(endPoint);

					endPoint.controlPoint = controlPoint;
					lastPoint = endPoint;
				} else {
					bound.extend(coord);
					lastPoint = new L.latLng(coord[0], coord[1]);
				}
			}
			return bound;
		},

		//TODO: use a centroid algorithm instead
		getCenter: function getCenter() {
			return this._bounds.getCenter();
		},

		_update: function _update() {
			//5
			if (!this._map) {
				return;
			}
			this._updatePath();
		},

		_updatePath: function _updatePath() {
			//6
			this._renderer._updatecurve(this);
		},

		_project: function _project() {
			//4
			var coord, lastCoord, curCommand, curPoint;

			this._points = [];

			for (var i = 0; i < this._coords.length; i++) {
				coord = this._coords[i];
				if (typeof coord == 'string' || coord instanceof String) {
					this._points.push(coord);
					curCommand = coord;
				} else {
					switch (coord.length) {
						case 2:
							curPoint = this._map.latLngToLayerPoint(coord);
							lastCoord = coord;
							break;
						case 1:
							if (curCommand == 'H') {
								curPoint = this._map.latLngToLayerPoint([lastCoord[0], coord[0]]);
								lastCoord = [lastCoord[0], coord[0]];
							} else {
								curPoint = this._map.latLngToLayerPoint([coord[0], lastCoord[1]]);
								lastCoord = [coord[0], lastCoord[1]];
							}
							break;
					}
					this._points.push(curPoint);
				}
			}
		}
	});

	L.curve = function (path, options) {
		return new L.Curve(path, options);
	};

	L.SVG.include({ //7
		_updatecurve: function _updatecurve(layer) {
			this._setPath(layer, this._curvePointsToPath(layer._points));
			if (layer.options.animate) {
				var path = layer._path;
				var length = path.getTotalLength();

				if (!layer.options.dashArray) {
					path.style.strokeDasharray = length + ' ' + length;
				}

				if (layer._initialUpdate) {
					path.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], layer.options.animate);
					layer._initialUpdate = false;
				}
			}
		},

		_curvePointsToPath: function _curvePointsToPath(points) {
			var point,
			    curCommand,
			    str = '';
			for (var i = 0; i < points.length; i++) {
				point = points[i];
				if (typeof point == 'string' || point instanceof String) {
					curCommand = point;
					str += curCommand;
				} else {
					switch (curCommand) {
						case 'H':
							str += point.x + ' ';
							break;
						case 'V':
							str += point.y + ' ';
							break;
						default:
							str += point.x + ',' + point.y + ' ';
							break;
					}
				}
			}
			return str || 'M0 0';
		}
	});

/***/ }
/******/ ])
});
;