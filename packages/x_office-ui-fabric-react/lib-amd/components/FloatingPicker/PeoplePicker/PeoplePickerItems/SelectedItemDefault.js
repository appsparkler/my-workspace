define(["require", "exports", "tslib", "react", "../../../../Utilities", "../../../../Persona", "../../../../Button", "./PickerItemsDefault.scss"], function (require, exports, tslib_1, React, Utilities_1, Persona_1, Button_1, stylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles = stylesImport;
    exports.SelectedItemDefault = function (peoplePickerItemProps) {
        var _a, _b;
        var item = peoplePickerItemProps.item, onRemoveItem = peoplePickerItemProps.onRemoveItem, index = peoplePickerItemProps.index, selected = peoplePickerItemProps.selected, removeButtonAriaLabel = peoplePickerItemProps.removeButtonAriaLabel;
        var itemId = Utilities_1.getId();
        var onClickIconButton = function (removeItem) {
            return function () {
                if (removeItem) {
                    removeItem();
                }
            };
        };
        return (React.createElement("div", { className: Utilities_1.css('ms-PickerPersona-container', styles.personaContainer, (_a = {}, _a['is-selected ' + styles.personaContainerIsSelected] = selected, _a), (_b = {}, _b['is-invalid ' + styles.validationError] = !item.isValid, _b)), "data-is-focusable": true, "data-is-sub-focuszone": true, "data-selection-index": index, role: 'listitem', "aria-labelledby": 'selectedItemPersona-' + itemId },
            React.createElement("div", { className: Utilities_1.css('ms-PickerItem-content', styles.itemContent), id: 'selectedItemPersona-' + itemId },
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, item, { presence: item.presence !== undefined ? item.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.size28 }))),
            React.createElement(Button_1.IconButton, { onClick: onClickIconButton(onRemoveItem), iconProps: { iconName: 'Cancel', style: { fontSize: '12px' } }, className: Utilities_1.css('ms-PickerItem-removeButton', styles.removeButton), ariaLabel: removeButtonAriaLabel })));
    };
});
//# sourceMappingURL=SelectedItemDefault.js.map