"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Styling_1 = require("../../Styling");
var Styling_2 = require("../../Styling");
exports.ButtonGlobalClassNames = {
    msButton: 'ms-Button',
    msButtonHasMenu: 'ms-Button--hasMenu',
    msButtonIcon: 'ms-Button-icon',
    msButtonMenuIcon: 'ms-Button-menuIcon',
    msButtonLabel: 'ms-Button-label',
    msButtonDescription: 'ms-Button-description',
    msButtonScreenReaderText: 'ms-Button-screenReaderText',
    msButtonFlexContainer: 'ms-Button-flexContainer',
    msButtonTextContainer: 'ms-Button-textContainer',
};
exports.getBaseButtonClassNames = Utilities_1.memoizeFunction(function (theme, styles, className, variantClassName, iconClassName, menuIconClassName, disabled, hasMenu, checked, expanded, isSplit) {
    var _a, _b;
    var classNames = Styling_2.getGlobalClassNames(exports.ButtonGlobalClassNames, theme || {});
    var isExpanded = expanded && !isSplit;
    return Styling_1.mergeStyleSets({
        root: [
            classNames.msButton,
            styles.root,
            variantClassName,
            checked && ['is-checked', styles.rootChecked],
            isExpanded && [
                'is-expanded',
                styles.rootExpanded,
                {
                    selectors: (_a = {},
                        _a[":hover ." + classNames.msButtonIcon] = styles.iconExpandedHovered,
                        // menuIcon falls back to rootExpandedHovered to support original behavior
                        _a[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconExpandedHovered || styles.rootExpandedHovered,
                        _a[':hover'] = styles.rootExpandedHovered,
                        _a),
                },
            ],
            hasMenu && [exports.ButtonGlobalClassNames.msButtonHasMenu, styles.rootHasMenu],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: (_b = {
                        ':hover': styles.rootHovered
                    },
                    _b[":hover ." + classNames.msButtonLabel] = styles.labelHovered,
                    _b[":hover ." + classNames.msButtonIcon] = styles.iconHovered,
                    _b[":hover ." + classNames.msButtonDescription] = styles.descriptionHovered,
                    _b[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconHovered,
                    _b[':focus'] = styles.rootFocused,
                    _b[':active'] = styles.rootPressed,
                    _b[":active ." + classNames.msButtonIcon] = styles.iconPressed,
                    _b[":active ." + classNames.msButtonDescription] = styles.descriptionPressed,
                    _b[":active ." + classNames.msButtonMenuIcon] = styles.menuIconPressed,
                    _b),
            },
            disabled && checked && [styles.rootCheckedDisabled],
            !disabled &&
                checked && {
                selectors: {
                    ':hover': styles.rootCheckedHovered,
                    ':active': styles.rootCheckedPressed,
                },
            },
            className,
        ],
        flexContainer: [classNames.msButtonFlexContainer, styles.flexContainer],
        textContainer: [classNames.msButtonTextContainer, styles.textContainer],
        icon: [
            classNames.msButtonIcon,
            iconClassName,
            styles.icon,
            isExpanded && styles.iconExpanded,
            checked && styles.iconChecked,
            disabled && styles.iconDisabled,
        ],
        label: [classNames.msButtonLabel, styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
        menuIcon: [
            classNames.msButtonMenuIcon,
            menuIconClassName,
            styles.menuIcon,
            checked && styles.menuIconChecked,
            disabled && !isSplit && styles.menuIconDisabled,
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: {
                    ':hover': styles.menuIconHovered,
                    ':active': styles.menuIconPressed,
                },
            },
            isExpanded && ['is-expanded', styles.menuIconExpanded],
        ],
        description: [
            classNames.msButtonDescription,
            styles.description,
            checked && styles.descriptionChecked,
            disabled && styles.descriptionDisabled,
        ],
        screenReaderText: [classNames.msButtonScreenReaderText, styles.screenReaderText],
    });
});
//# sourceMappingURL=BaseButton.classNames.js.map