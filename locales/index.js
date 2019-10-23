'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/');

var _translations = require('./da/translations.json');

var _translations2 = _interopRequireDefault(_translations);

var _translations3 = require('./en/translations.json');

var _translations4 = _interopRequireDefault(_translations3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var namespace = 'NAMESPACE'; //------------------------------------------------------------------------------
// <auto-generated>
// This code was generated by d2-i18n-generate.
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

_moment2.default.locale('en');

_d2I18n2.default.addResources('da', namespace, _translations2.default);
_d2I18n2.default.addResources('en', namespace, _translations4.default);

_d2I18n2.default.setDefaultNamespace(namespace);
_d2I18n2.default.changeLanguage('en');

exports.default = _d2I18n2.default;