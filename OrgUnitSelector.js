'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d2UiOrgUnitTree = require('@dhis2/d2-ui-org-unit-tree');

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = require('@material-ui/core/Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Menu = require('@material-ui/core/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _OrgUnitSelector = require('./styles/OrgUnitSelector.style');

var _OrgUnitSelector2 = _interopRequireDefault(_OrgUnitSelector);

var _UserOrgUnitsPanel = require('./UserOrgUnitsPanel');

var _UserOrgUnitsPanel2 = _interopRequireDefault(_UserOrgUnitsPanel);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _GridControl = require('./GridControl');

var _GridControl2 = _interopRequireDefault(_GridControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrgUnitSelector = function (_Component) {
    (0, _inherits3.default)(OrgUnitSelector, _Component);

    function OrgUnitSelector(props) {
        (0, _classCallCheck3.default)(this, OrgUnitSelector);

        var _this = (0, _possibleConstructorReturn3.default)(this, (OrgUnitSelector.__proto__ || (0, _getPrototypeOf2.default)(OrgUnitSelector)).call(this, props));

        _this.onExpand = function (orgUnit) {
            _this.setState({
                initiallyExpanded: [].concat((0, _toConsumableArray3.default)(_this.state.initiallyExpanded), [orgUnit.path])
            });
        };

        _this.onCollapse = function (orgUnit) {
            _this.setState({
                // Clear all org units which are children of collapsed org unit
                initiallyExpanded: _this.state.initiallyExpanded.filter(function (path) {
                    return !path.includes(orgUnit.id);
                })
            });
        };

        _this.onContextMenuClick = function (event, orgUnit, hasChildren, loadChildren) {
            if (!hasChildren) {
                return;
            }

            _this.setState({
                menuAnchorElement: event.currentTarget,
                loadingChildren: true
            }, function () {
                loadChildren().then(function (children) {
                    _this.setState({
                        children: Array.isArray(children) ? children : children.toArray(),
                        loadingChildren: false
                    });
                });
            });
        };

        _this.normalizeOptions = function (result, item) {
            return (0, _extends4.default)({}, result, (0, _defineProperty3.default)({}, item.id, item));
        };

        _this.selectChildren = function () {
            _this.closeContextMenu();

            _this.props.handleMultipleOrgUnitsSelect(_this.state.children);
        };

        _this.closeContextMenu = function () {
            _this.setState({ menuAnchorElement: null });
        };

        _this.renderGroupOptions = function (selected) {
            if (_this.props.groupOptions.length > 0) {
                var options = _this.props.groupOptions.reduce(_this.normalizeOptions, {});

                return selected.filter(function (id) {
                    return options[id];
                }).map(function (id) {
                    return options[id].displayName;
                }).join(', ');
            }

            return '';
        };

        _this.renderLevelOptions = function (selected) {
            if (_this.props.levelOptions.length > 0) {
                var options = _this.props.levelOptions.reduce(_this.normalizeOptions, {});

                return selected.filter(function (id) {
                    return options[id];
                }).map(function (id) {
                    return options[id].displayName;
                }).join(', ');
            }

            return '';
        };

        _this.renderOptionsPanel = function () {
            return _react2.default.createElement(
                'div',
                { style: _OrgUnitSelector2.default.footer },
                _react2.default.createElement(
                    _Grid2.default,
                    { container: true },
                    _react2.default.createElement(_GridControl2.default, {
                        label: _d2I18n2.default.t('Level'),
                        placeholder: _d2I18n2.default.t('Select a level'),
                        value: _this.props.level,
                        onChange: _this.props.onLevelChange,
                        options: _this.props.levelOptions,
                        disabled: _this.props.userOrgUnits.length > 0,
                        renderValue: _this.renderLevelOptions,
                        multiple: true
                    }),
                    _react2.default.createElement(_GridControl2.default, {
                        label: _d2I18n2.default.t('Group'),
                        placeholder: _d2I18n2.default.t('Select a group'),
                        value: _this.props.group,
                        onChange: _this.props.onGroupChange,
                        options: _this.props.groupOptions,
                        disabled: _this.props.userOrgUnits.length > 0,
                        renderValue: _this.renderGroupOptions,
                        multiple: true
                    })
                )
            );
        };

        _this.render = function () {
            var tooltipStyles = (0, _extends4.default)({}, _OrgUnitSelector2.default.orgUnitsContainer.tooltip, {
                backgroundColor: _this.props.deselectAllTooltipBackgroundColor,
                color: _this.props.deselectAllTooltipFontColor
            });

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { style: _OrgUnitSelector2.default.orgUnitsContainer },
                    _react2.default.createElement(
                        'div',
                        { style: _OrgUnitSelector2.default.scrollableContainer.index },
                        _react2.default.createElement(_UserOrgUnitsPanel2.default, {
                            selected: _this.props.selected,
                            styles: _OrgUnitSelector2.default.userOrgUnits,
                            userOrgUnits: _this.props.userOrgUnits,
                            handleUserOrgUnitClick: _this.props.handleUserOrgUnitClick,
                            checkboxColor: _this.props.checkboxColor
                        }),
                        _react2.default.createElement(
                            'div',
                            {
                                style: _OrgUnitSelector2.default.scrollableContainer.overlayContainer
                            },
                            _this.props.userOrgUnits.length > 0 && _react2.default.createElement('div', {
                                style: _OrgUnitSelector2.default.scrollableContainer.overlay
                            }),
                            _react2.default.createElement(_d2UiOrgUnitTree.OrgUnitTreeMultipleRoots, {
                                roots: _this.props.roots,
                                root: _this.props.root,
                                selected: _this.props.selected.map(function (orgUnit) {
                                    return orgUnit.path;
                                }),
                                initiallyExpanded: _this.state.initiallyExpanded,
                                onSelectClick: _this.props.handleOrgUnitClick,
                                onExpand: _this.onExpand,
                                onCollapse: _this.onCollapse,
                                onContextMenuClick: _this.onContextMenuClick,
                                treeStyle: _OrgUnitSelector2.default.orgUnitTree.treeStyle,
                                labelStyle: _OrgUnitSelector2.default.orgUnitTree.labelStyle,
                                selectedLabelStyle: _OrgUnitSelector2.default.orgUnitTree.selectedLabelStyle,
                                checkboxColor: _this.props.checkboxColor,
                                displayNameProperty: _this.props.displayNameProperty,
                                showFolderIcon: true,
                                disableSpacer: true,
                                isUserDataViewFallback: _this.props.isUserDataViewFallback
                            }),
                            _react2.default.createElement(
                                _Menu2.default,
                                {
                                    anchorEl: _this.state.menuAnchorElement,
                                    open: Boolean(_this.state.menuAnchorElement),
                                    onClose: _this.closeContextMenu,
                                    style: { zIndex: 3100 }
                                },
                                _react2.default.createElement(
                                    _MenuItem2.default,
                                    {
                                        onClick: _this.selectChildren,
                                        disabled: _this.state.loadingChildren,
                                        dense: true
                                    },
                                    _d2I18n2.default.t('Select all org units below')
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: _OrgUnitSelector2.default.orgUnitsContainer.tooltipContainer },
                        _this.props.selected.length > 0 && _react2.default.createElement(
                            'div',
                            { style: tooltipStyles },
                            _this.props.selected.length,
                            ' ',
                            _d2I18n2.default.t('selected'),
                            ' -',
                            _react2.default.createElement(
                                'button',
                                {
                                    onClick: _this.props.onDeselectAllClick,
                                    style: _OrgUnitSelector2.default.orgUnitsContainer.tooltip.link
                                },
                                _d2I18n2.default.t('Deselect all')
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _this.renderOptionsPanel()
                )
            );
        };

        _this.state = {
            menuAnchorElement: null,
            children: null,
            loadingChildren: false,
            initiallyExpanded: _this.props.selected.map(function (ou) {
                return (0, _util2.default)(ou.path);
            })
        };
        return _this;
    }

    (0, _createClass3.default)(OrgUnitSelector, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // if props.selected.length changed by more than 1, then another analytic object was selected
            if (Math.abs(prevProps.selected.length - this.props.selected.length) > 1) {
                // In this case refresh expanded org units
                // eslint-disable-next-line
                this.setState({
                    initiallyExpanded: this.props.selected.map(function (ou) {
                        return (0, _util2.default)(ou.path);
                    })
                });
            } else {
                // If props.selected.length changed by 1 or didnt change
                // then check if analytic object was changed by comparing ids
                // if more than 1 ids are different, then and we should refresh expanded org units
                var counter = 0;

                var orgUnits = prevProps.selected.length < this.props.selected.length ? prevProps.selected : this.props.selected;

                for (var i = 0; i < orgUnits.length; ++i) {
                    if (prevProps.selected[i].id !== this.props.selected[i].id) {
                        counter += 1;

                        if (counter > 1) {
                            // eslint-disable-next-line
                            this.setState({
                                initiallyExpanded: this.props.selected.map(function (ou) {
                                    return (0, _util2.default)(ou.path);
                                })
                            });

                            break;
                        }
                    }
                }
            }
        }
    }]);
    return OrgUnitSelector;
}(_react.Component);

OrgUnitSelector.propTypes = {
    /**
     * Display name property taken from user settings
     */
    displayNameProperty: _propTypes2.default.string,

    /**
     * Array of objects with required param id
     */
    selected: _propTypes2.default.array,

    /**
     * Array of user organisation units
     * See userOrgUnits.js for static options
     */
    userOrgUnits: _propTypes2.default.array,

    /**
     * Level multiselect array of ids
     */
    level: _propTypes2.default.array,

    /**
     * Group multiselect array of ids
     */
    group: _propTypes2.default.array,

    /**
     * Org unit level options.
     */
    levelOptions: _propTypes2.default.array,

    /**
     * Org unit groups options.
     */
    groupOptions: _propTypes2.default.array,

    /**
     * Setter function for level multiselect value
     */
    onLevelChange: _propTypes2.default.func.isRequired,

    /**
     * Setter for group multiselect value
     */
    onGroupChange: _propTypes2.default.func.isRequired,

    /**
     * On deselect all click handler
     */
    onDeselectAllClick: _propTypes2.default.func.isRequired,

    /**
     * Function for handling multiple org units select
     */
    handleMultipleOrgUnitsSelect: _propTypes2.default.func.isRequired,

    /**
     * Callback handler for selecting orgunit
     * Arguments supplied in callback: event, orgunit
     */
    handleOrgUnitClick: _propTypes2.default.func.isRequired,

    /**
     * Callback handler for selecting user orgunit
     * Arguments supplied in callback: event, checked
     */
    handleUserOrgUnitClick: _propTypes2.default.func.isRequired,

    /**
     * Root organisation units whenever multiple roots are available
     */
    roots: _propTypes2.default.array,

    /**
     * Root organisation unit
     */
    root: _propTypes2.default.object.isRequired,

    /**
     * Font color for text in deselect all tooltip
     */
    deselectAllTooltipFontColor: _propTypes2.default.string,

    /**
     * Font color for background in deselect all tooltip
     */
    deselectAllTooltipBackgroundColor: _propTypes2.default.string,

    /**
     * Checkbox color in org unit tree
     */
    checkboxColor: _propTypes2.default.string,

    /**
     * Extra query parameter to use when requesting org unit data from the API
     */
    isUserDataViewFallback: _propTypes2.default.bool
};

OrgUnitSelector.defaultProps = {
    displayNameProperty: 'displayName',
    selected: [],
    userOrgUnits: [],
    level: [],
    group: [],
    levelOptions: [],
    groupOptions: [],
    checkboxColor: 'primary',
    deselectAllTooltipFontColor: 'white',
    deselectAllTooltipBackgroundColor: 'gray',
    isUserDataViewFallback: false
};

exports.default = OrgUnitSelector;