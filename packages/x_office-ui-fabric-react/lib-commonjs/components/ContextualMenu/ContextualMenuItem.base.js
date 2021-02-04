"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var index_1 = require("../../utilities/contextualMenu/index");
var Utilities_1 = require("../../Utilities");
var Icon_1 = require("../../Icon");
var renderItemIcon = function (props) {
    var item = props.item, hasIcons = props.hasIcons, classNames = props.classNames;
    var iconProps = item.iconProps;
    if (!hasIcons) {
        return null;
    }
    if (item.onRenderIcon) {
        return item.onRenderIcon(props);
    }
    return React.createElement(Icon_1.Icon, tslib_1.__assign({}, iconProps, { className: classNames.icon }));
};
var renderCheckMarkIcon = function (_a) {
    var onCheckmarkClick = _a.onCheckmarkClick, item = _a.item, classNames = _a.classNames;
    var isItemChecked = index_1.getIsChecked(item);
    if (onCheckmarkClick) {
        // Ensures that the item is passed as the first argument to the checkmark click callback.
        var onClick = function (e) { return onCheckmarkClick(item, e); };
        return (React.createElement(Icon_1.Icon, { iconName: item.canCheck !== false && isItemChecked ? 'CheckMark' : '', className: classNames.checkmarkIcon, 
            // eslint-disable-next-line react/jsx-no-bind
            onClick: onClick }));
    }
    return null;
};
var renderItemName = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    /* eslint-disable deprecation/deprecation */
    if (item.text || item.name) {
        return React.createElement("span", { className: classNames.label }, item.text || item.name);
    }
    /* eslint-enable deprecation/deprecation */
    return null;
};
var renderSecondaryText = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (item.secondaryText) {
        return React.createElement("span", { className: classNames.secondaryText }, item.secondaryText);
    }
    return null;
};
var renderSubMenuIcon = function (_a) {
    var item = _a.item, classNames = _a.classNames, theme = _a.theme;
    if (index_1.hasSubmenu(item)) {
        return (React.createElement(Icon_1.Icon, tslib_1.__assign({ iconName: Utilities_1.getRTL(theme) ? 'ChevronLeft' : 'ChevronRight' }, item.submenuIconProps, { className: classNames.subMenuIcon })));
    }
    return null;
};
var ContextualMenuItemBase = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuItemBase, _super);
    function ContextualMenuItemBase(props) {
        var _this = _super.call(this, props) || this;
        _this.openSubMenu = function () {
            var _a = _this.props, item = _a.item, openSubMenu = _a.openSubMenu, getSubmenuTarget = _a.getSubmenuTarget;
            if (getSubmenuTarget) {
                var submenuTarget = getSubmenuTarget();
                if (index_1.hasSubmenu(item) && openSubMenu && submenuTarget) {
                    openSubMenu(item, submenuTarget);
                }
            }
        };
        _this.dismissSubMenu = function () {
            var _a = _this.props, item = _a.item, dismissSubMenu = _a.dismissSubMenu;
            if (index_1.hasSubmenu(item) && dismissSubMenu) {
                dismissSubMenu();
            }
        };
        _this.dismissMenu = function (dismissAll) {
            var dismissMenu = _this.props.dismissMenu;
            if (dismissMenu) {
                dismissMenu(undefined /* ev */, dismissAll);
            }
        };
        Utilities_1.initializeComponentRef(_this);
        return _this;
    }
    ContextualMenuItemBase.prototype.render = function () {
        var _a = this.props, item = _a.item, classNames = _a.classNames;
        var renderContent = item.onRenderContent || this._renderLayout;
        return (React.createElement("div", { className: item.split ? classNames.linkContentMenu : classNames.linkContent }, renderContent(this.props, {
            renderCheckMarkIcon: renderCheckMarkIcon,
            renderItemIcon: renderItemIcon,
            renderItemName: renderItemName,
            renderSecondaryText: renderSecondaryText,
            renderSubMenuIcon: renderSubMenuIcon,
        })));
    };
    ContextualMenuItemBase.prototype._renderLayout = function (props, defaultRenders) {
        return (React.createElement(React.Fragment, null,
            defaultRenders.renderCheckMarkIcon(props),
            defaultRenders.renderItemIcon(props),
            defaultRenders.renderItemName(props),
            defaultRenders.renderSecondaryText(props),
            defaultRenders.renderSubMenuIcon(props)));
    };
    return ContextualMenuItemBase;
}(React.Component));
exports.ContextualMenuItemBase = ContextualMenuItemBase;
//# sourceMappingURL=ContextualMenuItem.base.js.map