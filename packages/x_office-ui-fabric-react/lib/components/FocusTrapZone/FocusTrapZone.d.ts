import * as React from 'react';
import { IFocusTrapZone, IFocusTrapZoneProps } from './FocusTrapZone.types';
export declare class FocusTrapZone extends React.Component<IFocusTrapZoneProps, {}> implements IFocusTrapZone {
    private static _focusStack;
    private _root;
    private _firstBumper;
    private _lastBumper;
    private _hasFocus;
    private _unmodalize?;
    private _previouslyFocusedElementOutsideTrapZone;
    private _previouslyFocusedElementInTrapZone?;
    private _disposeFocusHandler;
    private _disposeClickHandler;
    constructor(props: IFocusTrapZoneProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: IFocusTrapZoneProps): void;
    componentDidUpdate(prevProps: IFocusTrapZoneProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    focus(): void;
    private _focusAsync;
    private _onRootFocus;
    private _onRootBlur;
    private _onFirstBumperFocus;
    private _onLastBumperFocus;
    private _onBumperFocus;
    private _bringFocusIntoZone;
    private _returnFocusToInitiator;
    private _updateEventHandlers;
    private _onFocusCapture;
    private _isBumper;
    private _forceFocusInTrap;
    private _forceClickInTrap;
    private _getDocument;
}
