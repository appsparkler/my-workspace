define(["require", "exports", "../../Utilities", "../../Styling"], function (require, exports, Utilities_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @deprecated use getStyles exported from VerticalDivider.styles.ts
     */
    exports.getDividerClassNames = Utilities_1.memoizeFunction(
    // eslint-disable-next-line deprecation/deprecation
    function (theme) {
        return Styling_1.mergeStyleSets({
            wrapper: {
                display: 'inline-flex',
                height: '100%',
                alignItems: 'center',
            },
            divider: {
                width: 1,
                height: '100%',
                backgroundColor: theme.palette.neutralTertiaryAlt,
            },
        });
    });
});
//# sourceMappingURL=VerticalDivider.classNames.js.map