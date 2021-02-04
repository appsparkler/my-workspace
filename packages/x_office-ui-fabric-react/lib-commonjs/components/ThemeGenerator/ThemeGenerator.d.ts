import { IColor } from '../../utilities/color/interfaces';
import { IThemeSlotRule } from './IThemeSlotRule';
import { IThemeRules } from './IThemeRules';
export declare class ThemeGenerator {
    /**
     * Sets an IThemeSlotRule to the given color and cascades it to the rest of the theme, updating other IThemeSlotRules
     * in the theme that inherit from that color.
     * @param isInverted - whether it's a dark theme or not, which affects the algorithm used to generate shades
     * @param isCustomization - should be true only if it's a user action, and indicates overwriting the slot's
     * inheritance (if any)
     * @param overwriteCustomColor - A slot could have a generated color based on its inheritance rules (isCustomized
     * is false), or a custom color based on user input (isCustomized is true). This bool tells us whether to override
     * existing customized colors.
     */
    static setSlot(rule: IThemeSlotRule, color: string | IColor, isInverted?: boolean, isCustomization?: boolean, overwriteCustomColor?: boolean): void;
    /**
     * Sets the color of each slot based on its rule. Slots that don't inherit must have a color already.
     * If this completes without error, then the theme is ready to use. (All slots will have a color.)
     * setSlot() can be called before this, but this must be called before getThemeAs*().
     * Does not override colors of rules where isCustomized is true (i.e. doesn't override existing customizations).
     */
    static insureSlots(slotRules: IThemeRules, isInverted: boolean): void;
    /**
     * Gets the JSON-formatted blob that describes the theme, usable with the REST request endpoints:
     * ```
     * { [theme slot name as string] : [color as string],
     *  "tokenName": "#f00f00",
     *  "tokenName2": "#ba2ba2",
     *   ... }
     * ```
     */
    static getThemeAsJson(slotRules: IThemeRules): any;
    /**
     * Gets code-formatted load theme blob that can be copy and pasted.
     * Only used for the old theme designer, where loadTheme usage is acceptable,
     * unlike in the new theme designer.
     */
    static getThemeAsCode(slotRules: IThemeRules): any;
    /**
     * Gets code-formatted load theme blob, specifically for the new theme designer,
     * aka.ms/themedesigner. Shouldn't use loadTheme like the old theme designer since it's deprecated.
     * We want to use the theme object from createTheme and use the Customizations.applySettings API instead.
     */
    static getThemeAsCodeWithCreateTheme(slotRules: IThemeRules): any;
    /**
     * Gets the theme as a list of SASS variables that can be used in code
     * ```
     * $tokenName: "[theme:tokenName, default:#f00f00]";
     * $tokenName2: "[theme:tokenName2, default:#ba2ba2]";
     * ...
     * ```
     */
    static getThemeAsSass(slotRules: IThemeRules): any;
    /**
     * Gets the theme formatted for PowerShell scripts
     * ```
     * @{
     * "tokenName" = "#f00f00";
     * "tokenName2" = "#ba2ba2";
     * ...
     * }
     * ```
     */
    static getThemeForPowerShell(slotRules: IThemeRules): any;
    /**
     * Sets the given slot's color to the appropriate color, shading it if necessary.
     * Then, iterates through all other rules (that are this rule's dependents) to update them accordingly.
     * @param isCustomization - If true, it's a user-provided color, which should be to that raw color.
     * If false, the rule it's inheriting from changed, so updated using asShade.
     */
    private static _setSlot;
    /**
     * Makes the rest of the code that's used for the load theme blob in the exported codepens of
     * both the older sharepoint-specific theme designer and the new theme designer. Takes in
     * theme rules and converts them to format fitting a list of palette colors and their values.
     * Resulting output looks like:
     * ```
     * const _theme = createTheme({
     *  palette: {
     *    themePrimary: '#0078d4',
     *    themeLighterAlt: '#f3f9fd',
     *    ...
     *  }});
     * ```
     * The first line is loadTheme instead of createTheme for the old sharepoint theme designer.
     */
    private static _makeRemainingCode;
}
