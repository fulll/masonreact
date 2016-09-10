'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.masonrefresh = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _masonryLayout = require('masonry-layout');

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Masonreact = function (_React$Component) {
  _inherits(Masonreact, _React$Component);

  function Masonreact() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Masonreact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Masonreact.__proto__ || Object.getPrototypeOf(Masonreact)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {

      _this.msnry = new _masonryLayout2.default('.grid', {
        percentPosition: true,
        transitionDuration: _this.props.transitionDuration || 0
      });

      window.addEventListener('masonreact', function () {
        return _this.msnry.layout();
      });
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('masonreact', function () {
        return _this.msnry.layout();
      });
    }, _this.render = function () {

      var cols = _this.props.cols || 1;
      var margin = _this.props.margin || 5;

      var style = {
        item: {
          boxSizing: 'border-box',
          padding: 20,
          width: 'calc(' + 100 / cols + '% - ' + 2 * margin + 'px)',
          margin: margin
        },
        grid: {
          width: '100%',
          transition: 'none'
        }
      };

      return _react2.default.createElement(
        'div',
        { className: 'grid', style: style.grid },
        _react2.default.Children.map(_this.props.children, function (child) {
          return child ? _react2.default.cloneElement(child, {
            style: _extends({}, child.props.style, style.item)
          }) : null;
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Masonreact;
}(_react2.default.Component);

exports.default = Masonreact;


var event = document.createEvent('Event');
event.initEvent('masonreact');

var masonrefresh = exports.masonrefresh = function masonrefresh() {
  return window.dispatchEvent(event);
};
