'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactStickyScrollSpy = function (_React$Component) {
	_inherits(ReactStickyScrollSpy, _React$Component);

	function ReactStickyScrollSpy(props) {
		_classCallCheck(this, ReactStickyScrollSpy);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactStickyScrollSpy).call(this, props));

		_this.easingEffects = {
			linear: function linear(t) {
				return t;
			},
			easeInQuad: function easeInQuad(t) {
				return t * t;
			},
			easeOutQuad: function easeOutQuad(t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function easeInOutQuad(t) {
				return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
			},
			easeInCubic: function easeInCubic(t) {
				return t * t * t;
			},
			easeOutCubic: function easeOutCubic(t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function easeInOutCubic(t) {
				return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function easeInQuart(t) {
				return t * t * t * t;
			},
			easeOutQuart: function easeOutQuart(t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function easeInOutQuart(t) {
				return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function easeInQuint(t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function easeOutQuint(t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function easeInOutQuint(t) {
				return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function easeInSine(t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function easeOutSine(t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function easeInOutSine(t) {
				return -.5 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function easeInExpo(t) {
				return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function easeOutExpo(t) {
				return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function easeInOutExpo(t) {
				return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function easeInCirc(t) {
				return 1 > t ? -1 * (Math.sqrt(1 - (t /= 1) * t) - 1) : t;
			},
			easeOutCirc: function easeOutCirc(t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function easeInOutCirc(t) {
				return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function easeInElastic(t) {
				var e = 1.70158,
				    n = 0,
				    i = 1;
				return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / n)));
			},
			easeOutElastic: function easeOutElastic(t) {
				var e = 1.70158,
				    n = 0,
				    i = 1;
				return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - e) * Math.PI / n) + 1);
			},
			easeInOutElastic: function easeInOutElastic(t) {
				var e = 1.70158,
				    n = 0,
				    i = 1;
				return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .3 * 1.5), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / n) * .5 + 1);
			},
			easeInBack: function easeInBack(t) {
				var e = 1.70158;
				return 1 * (t /= 1) * t * ((e + 1) * t - e);
			},
			easeOutBack: function easeOutBack(t) {
				var e = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
			},
			easeInOutBack: function easeInOutBack(t) {
				var e = 1.70158;
				return (t /= .5) < 1 ? .5 * t * t * (((e *= 1.525) + 1) * t - e) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
			},
			easeInBounce: function easeInBounce(t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function easeOutBounce(t) {
				return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
			},
			easeInOutBounce: function easeInOutBounce(t) {
				return .5 > t ? .5 * easingEffects.easeInBounce(2 * t) : .5 * easingEffects.easeOutBounce(2 * t - 1) + .5;
			}
		};
		_this.scrollFunction = _this.scrollEvent.bind(_this, _this);
		_this.linkFunction = _this.linkClick.bind(_this, _this);
		return _this;
	}

	_createClass(ReactStickyScrollSpy, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('scroll', this.scrollFunction);
			this.renderAgain();
		}
	}, {
		key: 'renderAgain',
		value: function renderAgain() {
			if (this.validaTags && this.validaTags.length) {
				for (var i = 0; i < this.validaTags.length; i++) {
					var item = this.validaTags[i];
					item.removeEventListener('click', this.linkFunction);
				}
			}

			this.aTags = this.refs.sticky.getElementsByTagName('a');
			this.validaTags = [];
			this.validIdTags = [];
			for (var i = 0; i < this.aTags.length; i++) {
				var _item = this.aTags[i];
				var id = _item.getAttribute('href');
				if (id.length && id.slice(0, 1) === '#') {
					this.validIdTags.push(id);
					this.validaTags.push(_item);
					_item.addEventListener('click', this.linkFunction);
				}
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('scroll', this.scrollFunction);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.renderAgain();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ ref: 'sticky' },
				_react2.default.createElement(
					'div',
					null,
					this.props.children
				)
			);
		}
	}, {
		key: 'scrollEvent',
		value: function scrollEvent(_self, event) {
			//this.validaTags
			var cur = [];
			var currentScroll = event.srcElement.body.scrollTop;
			var elementHeightTop = _self.refs.sticky.getBoundingClientRect().top;

			for (var i = 0; i < _self.validIdTags.length; i++) {
				var href = _self.validIdTags[i];
				if (href != '#') {
					var elementOffsetTop = document.getElementById(href.slice(1)).offsetTop;
					if (elementOffsetTop < currentScroll + _self.refs.sticky.childNodes[0].offsetHeight) //#######
						cur.push(href);
				} else {
					cur.push('#');
				}
			}
			cur = cur[cur.length - 1];
			for (var _i = 0; _i < _self.aTags.length; _i++) {
				if (cur == _self.aTags[_i].getAttribute('href')) {
					_self.aTags[_i].parentNode.classList.add('active');
				} else {
					_self.aTags[_i].parentNode.classList.remove('active');
				}
			}

			if (elementHeightTop < 0) {
				if (!_self.isFixed) {
					var elementHeight = _self.refs.sticky.childNodes[0].offsetHeight;
					_self.refs.sticky.style.height = elementHeight + 'px';

					var childElement = _self.refs.sticky.childNodes[0].style;
					childElement.position = 'fixed';
					childElement.top = '0px';
					childElement.width = '100%';
					childElement.zIndex = 99999;
					_self.isFixed = true;
					if (typeof _self.props.onFixedChange === 'function') {
						_self.props.onFixedChange(true);
					}
				}
			} else {
				if (_self.isFixed) {
					_self.refs.sticky.style.height = 'auto';
					var _childElement = _self.refs.sticky.childNodes[0].style;
					_childElement.position = 'relative';
					_childElement.top = 'auto';
					_childElement.width = 'auto';
					_childElement.zIndex = 'auto';
					_self.isFixed = false;
					if (typeof _self.props.onFixedChange === 'function') {
						_self.props.onFixedChange(false);
					}
				}
			}
		}
	}, {
		key: 'linkClick',
		value: function linkClick(_self, event) {
			event.preventDefault();
			var element = event.target;
			var href = element.getAttribute('href');
			var offsetTop = href === "#" ? 0 : document.getElementById(href.slice(1)).offsetTop - _self.refs.sticky.childNodes[0].offsetHeight + 1;
			_self.scrollToY(offsetTop);
		}
	}, {
		key: 'scrollToY',
		value: function scrollToY(scrollHeight) {
			var _self = this;
			var scrollStep = 600 / 15;
			var currentScrollStep = 1;

			requestAnimationFrame(step);
			function step() {
				setTimeout(function () {
					if (scrollStep >= currentScrollStep) {
						requestAnimationFrame(step);
						var currentStep = 100 / scrollStep * currentScrollStep;
						currentScrollStep++;
						var scrollRatio = _self.easingEffects.easeInQuart(currentStep / 100);
						var yPosScroll = (window.scrollY - scrollHeight) * scrollRatio;
						window.scrollTo(0, window.scrollY - yPosScroll);
					}
				}, 15);
			}
		}
	}]);

	return ReactStickyScrollSpy;
}(_react2.default.Component);

ReactStickyScrollSpy.defaultProps = {
	onFixedChange: function onFixedChange() {}
};

exports.default = ReactStickyScrollSpy;
