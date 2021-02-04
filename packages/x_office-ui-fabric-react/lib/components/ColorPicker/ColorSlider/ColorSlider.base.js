import { __extends } from "tslib";
import * as React from 'react';
import { classNamesFunction, initializeComponentRef, on, KeyCodes, getWindow, warnDeprecations, warn, } from '../../../Utilities';
import { clamp } from '../../../utilities/color/clamp';
import { MAX_COLOR_HUE, MAX_COLOR_ALPHA } from '../../../utilities/color/consts';
var getClassNames = classNamesFunction();
/**
 * {@docCategory ColorPicker}
 */
var ColorSliderBase = /** @class */ (function (_super) {
    __extends(ColorSliderBase, _super);
    function ColorSliderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._disposables = [];
        _this._root = React.createRef();
        _this._onKeyDown = function (ev) {
            var currentValue = _this.value;
            var maxValue = _this._maxValue;
            var increment = ev.shiftKey ? 10 : 1;
            // Intentionally DO NOT flip the color picker in RTL: its orientation is not very meaningful,
            // and getting all the math and styles flipped correctly is tricky
            switch (ev.which) {
                case KeyCodes.left: {
                    currentValue -= increment;
                    break;
                }
                case KeyCodes.right: {
                    currentValue += increment;
                    break;
                }
                case KeyCodes.home: {
                    currentValue = 0;
                    break;
                }
                case KeyCodes.end: {
                    currentValue = maxValue;
                    break;
                }
                default: {
                    return;
                }
            }
            _this._updateValue(ev, clamp(currentValue, maxValue));
        };
        _this._onMouseDown = function (ev) {
            var win = getWindow(_this);
            if (win) {
                _this._disposables.push(on(win, 'mousemove', _this._onMouseMove, true), on(win, 'mouseup', _this._disposeListeners, true));
            }
            _this._onMouseMove(ev);
        };
        _this._onMouseMove = function (ev) {
            if (!_this._root.current) {
                return;
            }
            var maxValue = _this._maxValue;
            var rectSize = _this._root.current.getBoundingClientRect();
            var currentPercentage = (ev.clientX - rectSize.left) / rectSize.width;
            var newValue = clamp(Math.round(currentPercentage * maxValue), maxValue);
            _this._updateValue(ev, newValue);
        };
        _this._disposeListeners = function () {
            _this._disposables.forEach(function (dispose) { return dispose(); });
            _this._disposables = [];
        };
        initializeComponentRef(_this);
        warnDeprecations('ColorSlider', props, {
            thumbColor: 'styles.sliderThumb',
            overlayStyle: 'overlayColor',
            isAlpha: 'type',
            maxValue: 'type',
            minValue: 'type',
        });
        // eslint-disable-next-line deprecation/deprecation
        if (_this._type !== 'hue' && !(props.overlayColor || props.overlayStyle)) {
            warn("ColorSlider: 'overlayColor' is required when 'type' is \"alpha\" or \"transparency\"");
        }
        _this.state = {
            currentValue: props.value || 0,
        };
        return _this;
    }
    Object.defineProperty(ColorSliderBase.prototype, "value", {
        get: function () {
            return this.state.currentValue;
        },
        enumerable: true,
        configurable: true
    });
    ColorSliderBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        // if props changed (as opposed to a state update), set the value
        // TODO: switch to strict controlled pattern instead
        if (prevProps !== this.props && this.props.value !== undefined) {
            this.setState({ currentValue: this.props.value });
        }
    };
    ColorSliderBase.prototype.componentWillUnmount = function () {
        this._disposeListeners();
    };
    ColorSliderBase.prototype.render = function () {
        var type = this._type;
        var maxValue = this._maxValue;
        var _a = this.props, 
        // eslint-disable-next-line deprecation/deprecation
        overlayStyle = _a.overlayStyle, overlayColor = _a.overlayColor, theme = _a.theme, className = _a.className, styles = _a.styles, _b = _a.ariaLabel, ariaLabel = _b === void 0 ? type : _b;
        var currentValue = this.value;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            type: type,
        });
        var currentPercentage = (100 * currentValue) / maxValue;
        return (React.createElement("div", { ref: this._root, className: classNames.root, tabIndex: 0, onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, role: "slider", "aria-valuenow": currentValue, "aria-valuetext": String(currentValue), "aria-valuemin": 0, "aria-valuemax": maxValue, "aria-label": ariaLabel, "data-is-focusable": true },
            !!(overlayColor || overlayStyle) && (React.createElement("div", { className: classNames.sliderOverlay, 
                // this isn't included in getStyles because it may change frequently
                style: overlayColor
                    ? {
                        background: type === 'transparency'
                            ? "linear-gradient(to right, #" + overlayColor + ", transparent)"
                            : "linear-gradient(to right, transparent, #" + overlayColor + ")",
                    }
                    : overlayStyle })),
            React.createElement("div", { className: classNames.sliderThumb, style: { left: currentPercentage + '%' } })));
    };
    Object.defineProperty(ColorSliderBase.prototype, "_type", {
        get: function () {
            // eslint-disable-next-line deprecation/deprecation
            var _a = this.props, isAlpha = _a.isAlpha, _b = _a.type, type = _b === void 0 ? isAlpha ? 'alpha' : 'hue' : _b;
            return type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorSliderBase.prototype, "_maxValue", {
        get: function () {
            return this._type === 'hue' ? MAX_COLOR_HUE : MAX_COLOR_ALPHA;
        },
        enumerable: true,
        configurable: true
    });
    ColorSliderBase.prototype._updateValue = function (ev, newValue) {
        if (newValue === this.value) {
            return;
        }
        var onChange = this.props.onChange;
        if (onChange) {
            onChange(ev, newValue);
        }
        if (!ev.defaultPrevented) {
            this.setState({
                currentValue: newValue,
            });
            ev.preventDefault();
        }
    };
    ColorSliderBase.defaultProps = {
        value: 0,
    };
    return ColorSliderBase;
}(React.Component));
export { ColorSliderBase };
//# sourceMappingURL=ColorSlider.base.js.map