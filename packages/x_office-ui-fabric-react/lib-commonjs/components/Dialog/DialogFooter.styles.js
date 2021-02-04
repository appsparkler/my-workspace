"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../Styling");
var GlobalClassNames = {
    actions: 'ms-Dialog-actions',
    action: 'ms-Dialog-action',
    actionsRight: 'ms-Dialog-actionsRight',
};
exports.getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    return {
        actions: [
            classNames.actions,
            {
                position: 'relative',
                width: '100%',
                minHeight: '24px',
                lineHeight: '24px',
                margin: '16px 0 0',
                fontSize: '0',
                selectors: {
                    '.ms-Button': {
                        lineHeight: 'normal',
                    },
                },
            },
            className,
        ],
        action: [
            classNames.action,
            {
                margin: '0 4px',
            },
        ],
        actionsRight: [
            classNames.actionsRight,
            {
                textAlign: 'right',
                marginRight: '-4px',
                fontSize: '0',
            },
        ],
    };
};
//# sourceMappingURL=DialogFooter.styles.js.map