"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var KeytipData_1 = require("../../KeytipData");
var getClassNames = Utilities_1.classNamesFunction();
var LinkBase = /** @class */ (function (_super) {
    tslib_1.__extends(LinkBase, _super);
    function LinkBase(props) {
        var _this = _super.call(this, props) || this;
        _this._link = React.createRef();
        _this._renderContent = function (keytipAttributes) {
            if (keytipAttributes === void 0) { keytipAttributes = {}; }
            var _a = _this.props, disabled = _a.disabled, children = _a.children, className = _a.className, href = _a.href, theme = _a.theme, styles = _a.styles;
            var classNames = getClassNames(styles, {
                className: className,
                isButton: !href,
                isDisabled: disabled,
                theme: theme,
            });
            var RootType = _this._getRootType(_this.props);
            return (React.createElement(RootType, tslib_1.__assign({}, keytipAttributes, _this._adjustPropsForRootType(RootType, _this.props), { className: classNames.root, onClick: _this._onClick, ref: _this._link, "aria-disabled": disabled }), children));
        };
        _this._onClick = function (ev) {
            var _a = _this.props, onClick = _a.onClick, disabled = _a.disabled;
            if (disabled) {
                ev.preventDefault();
            }
            else if (onClick) {
                onClick(ev);
            }
        };
        Utilities_1.initializeComponentRef(_this);
        return _this;
    }
    LinkBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, keytipProps = _a.keytipProps;
        if (keytipProps) {
            return (React.createElement(KeytipData_1.KeytipData, { keytipProps: keytipProps, ariaDescribedBy: this.props['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return _this._renderContent(keytipAttributes); }));
        }
        return this._renderContent();
    };
    LinkBase.prototype.focus = function () {
        var current = this._link.current;
        if (current && current.focus) {
            current.focus();
        }
    };
    LinkBase.prototype._adjustPropsForRootType = function (RootType, props) {
        // Deconstruct the props so we remove props like `as`, `theme` and `styles`
        // as those will always be removed. We also take some props that are optional
        // based on the RootType.
        var children = props.children, as = props.as, disabled = props.disabled, target = props.target, href = props.href, theme = props.theme, getStyles = props.getStyles, styles = props.styles, componentRef = props.componentRef, keytipProps = props.keytipProps, restProps = tslib_1.__rest(props, ["children", "as", "disabled", "target", "href", "theme", "getStyles", "styles", "componentRef", "keytipProps"]);
        // RootType will be a string if we're dealing with an html component
        if (typeof RootType === 'string') {
            // Remove the disabled prop for anchor elements
            if (RootType === 'a') {
                return tslib_1.__assign({ target: target, href: disabled ? undefined : href }, restProps);
            }
            // Add the type='button' prop for button elements
            if (RootType === 'button') {
                return tslib_1.__assign({ type: 'button', disabled: disabled }, restProps);
            }
            // Remove the target and href props for all other non anchor elements
            return tslib_1.__assign(tslib_1.__assign({}, restProps), { disabled: disabled });
        }
        // Retain all props except 'as' for ReactComponents
        return tslib_1.__assign({ target: target, href: href, disabled: disabled }, restProps);
    };
    LinkBase.prototype._getRootType = function (props) {
        if (props.as) {
            return props.as;
        }
        if (props.href) {
            return 'a';
        }
        return 'button';
    };
    return LinkBase;
}(React.Component));
exports.LinkBase = LinkBase;
//# sourceMappingURL=Link.base.js.map