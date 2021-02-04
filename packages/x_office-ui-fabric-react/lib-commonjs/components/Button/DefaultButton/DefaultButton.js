"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var BaseButton_1 = require("../BaseButton");
var Utilities_1 = require("../../../Utilities");
var DefaultButton_styles_1 = require("./DefaultButton.styles");
/**
 * {@docCategory Button}
 */
var DefaultButton = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultButton, _super);
    function DefaultButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default', styles: DefaultButton_styles_1.getStyles(theme, styles, primary), onRenderDescription: Utilities_1.nullRender })));
    };
    DefaultButton = tslib_1.__decorate([
        Utilities_1.customizable('DefaultButton', ['theme', 'styles'], true)
    ], DefaultButton);
    return DefaultButton;
}(React.Component));
exports.DefaultButton = DefaultButton;
//# sourceMappingURL=DefaultButton.js.map