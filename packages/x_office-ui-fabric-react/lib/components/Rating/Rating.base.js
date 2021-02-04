import { __assign, __extends } from "tslib";
import * as React from 'react';
import { warnDeprecations, initializeComponentRef, classNamesFunction, css, format, getId, divProperties, getNativeProps, } from '../../Utilities';
import { Icon } from '../../Icon';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import { RatingSize } from './Rating.types';
var getClassNames = classNamesFunction();
var RatingStar = function (props) {
    var icon = props.icon || 'FavoriteStarFill';
    return (React.createElement("div", { className: props.classNames.ratingStar, key: props.id },
        React.createElement(Icon, { className: props.classNames.ratingStarBack, iconName: icon }),
        !props.disabled && (React.createElement(Icon, { className: props.classNames.ratingStarFront, iconName: icon, style: { width: props.fillPercentage + '%' } }))));
};
var RatingBase = /** @class */ (function (_super) {
    __extends(RatingBase, _super);
    function RatingBase(props) {
        var _this = _super.call(this, props) || this;
        initializeComponentRef(_this);
        warnDeprecations('Rating', props, { onChanged: 'onChange' });
        _this._id = getId('Rating');
        _this._min = _this.props.allowZeroStars ? 0 : 1;
        /* eslint-disable deprecation/deprecation */
        if (_this.props.min !== undefined && _this.props.min !== 1) {
            _this._min = _this.props.min;
        }
        /* eslint-enable deprecation/deprecation */
        _this._labelId = getId('RatingLabel');
        _this.state = {
            rating: _this._getInitialValue(props),
        };
        return _this;
    }
    RatingBase.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, disabled = _d.disabled, getAriaLabel = _d.getAriaLabel, styles = _d.styles, max = _d.max, readOnly = _d.readOnly, size = _d.size, theme = _d.theme, _e = _d.icon, icon = _e === void 0 ? 'FavoriteStarFill' : _e, _f = _d.unselectedIcon, unselectedIcon = _f === void 0 ? 'FavoriteStar' : _f, onRenderStar = _d.onRenderStar;
        var id = this._id;
        var stars = [];
        var starIds = [];
        var rating = this._getRating();
        var divProps = getNativeProps(this.props, divProperties);
        this._classNames = getClassNames(styles, {
            disabled: disabled,
            readOnly: readOnly,
            theme: theme,
        });
        var renderStar = function (starProps, renderer) {
            return renderer ? renderer(starProps) : React.createElement(RatingStar, __assign({ key: starProps.starNum + 'rating' }, starProps));
        };
        for (var i = this._min; i <= max; i++) {
            if (i !== 0) {
                var fillPercentage = this._getFillingPercentage(i);
                var ratingStarProps = {
                    fillPercentage: fillPercentage,
                    disabled: disabled,
                    classNames: this._classNames,
                    icon: fillPercentage > 0 ? icon : unselectedIcon,
                    starNum: i,
                };
                starIds.push(this._getStarId(i - 1));
                stars.push(React.createElement("button", __assign({ className: css(this._classNames.ratingButton, (_a = {},
                        _a[this._classNames.ratingStarIsLarge] = size === RatingSize.Large,
                        _a[this._classNames.ratingStarIsSmall] = size !== RatingSize.Large,
                        _a)), id: starIds[i - 1], key: i }, (i === Math.ceil(rating) ? { 'data-is-current': true } : {}), { onFocus: this._onFocus.bind(this, i), onClick: this._onFocus.bind(this, i), disabled: disabled || readOnly ? true : false, role: "presentation", type: "button" }),
                    this._getLabel(i),
                    renderStar(ratingStarProps, onRenderStar)));
            }
        }
        var ariaLabel = getAriaLabel ? getAriaLabel(rating ? rating : 0, max) : undefined;
        // When in read-only mode, we allow focus (per ARIA standards) and set up ARIA attributes to indicate element
        // is read-only. https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
        var readOnlyProps = readOnly
            ? {
                allowFocusRoot: true,
                disabled: true,
                'aria-label': ariaLabel,
                'aria-readonly': true,
                'data-is-focusable': true,
                tabIndex: 0,
            }
            : undefined;
        return (React.createElement("div", __assign({ className: css('ms-Rating-star', this._classNames.root, (_b = {},
                _b[this._classNames.rootIsLarge] = size === RatingSize.Large,
                _b[this._classNames.rootIsSmall] = size !== RatingSize.Large,
                _b)), "aria-label": !readOnly ? ariaLabel : '', id: id }, divProps),
            React.createElement(FocusZone, __assign({ direction: FocusZoneDirection.horizontal, className: css(this._classNames.ratingFocusZone, (_c = {},
                    _c[this._classNames.rootIsLarge] = size === RatingSize.Large,
                    _c[this._classNames.rootIsSmall] = size !== RatingSize.Large,
                    _c)), defaultActiveElement: rating ? starIds[Math.ceil(rating) - 1] && '#' + starIds[Math.ceil(rating) - 1] : undefined }, readOnlyProps), stars)));
    };
    RatingBase.prototype._getStarId = function (index) {
        return this._id + '-star-' + index;
    };
    RatingBase.prototype._onFocus = function (value, ev) {
        if (Math.ceil(this.state.rating) !== value) {
            this.setState({
                rating: value,
            });
            // eslint-disable-next-line deprecation/deprecation
            var _a = this.props, onChange = _a.onChange, onChanged = _a.onChanged;
            if (onChange) {
                onChange(ev, value);
            }
            if (onChanged) {
                onChanged(value);
            }
        }
    };
    RatingBase.prototype._getLabel = function (rating) {
        var text = this.props.ariaLabelFormat || '';
        return (React.createElement("span", { id: this._labelId + "-" + rating, className: this._classNames.labelText }, format(text, rating, this.props.max)));
    };
    RatingBase.prototype._getInitialValue = function (props) {
        if (typeof props.rating === 'undefined') {
            return this._min;
        }
        if (props.rating === null) {
            return undefined;
        }
        return this._getClampedRating(props.rating);
    };
    RatingBase.prototype._getClampedRating = function (rating) {
        return Math.min(Math.max(rating, this._min), this.props.max);
    };
    RatingBase.prototype._getRating = function () {
        if (this.props.rating !== undefined) {
            return this._getClampedRating(this.props.rating);
        }
        if (this.state.rating !== undefined && this.state.rating !== null) {
            return this._getClampedRating(this.state.rating);
        }
        return 0;
    };
    RatingBase.prototype._getFillingPercentage = function (starPosition) {
        var rating = this._getRating();
        var ceilValue = Math.ceil(rating);
        var fillPercentage = 100;
        if (starPosition === rating) {
            fillPercentage = 100;
        }
        else if (starPosition === ceilValue) {
            fillPercentage = 100 * (rating % 1);
        }
        else if (starPosition > ceilValue) {
            fillPercentage = 0;
        }
        return fillPercentage;
    };
    RatingBase.defaultProps = {
        min: 1,
        max: 5,
    };
    return RatingBase;
}(React.Component));
export { RatingBase };
//# sourceMappingURL=Rating.base.js.map