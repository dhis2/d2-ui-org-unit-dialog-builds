'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/ar');

require('moment/locale/');

require('moment/locale/es');

require('moment/locale/fr');

require('moment/locale/nb');

require('moment/locale/pt');

require('moment/locale/ru');

require('moment/locale/sv');

require('moment/locale/uk');

require('moment/locale/ur');

require('moment/locale/zh-cn');

var _translations = require('./ar/translations.json');

var _translations2 = _interopRequireDefault(_translations);

var _translations3 = require('./ckb/translations.json');

var _translations4 = _interopRequireDefault(_translations3);

var _translations5 = require('./da/translations.json');

var _translations6 = _interopRequireDefault(_translations5);

var _translations7 = require('./en/translations.json');

var _translations8 = _interopRequireDefault(_translations7);

var _translations9 = require('./es/translations.json');

var _translations10 = _interopRequireDefault(_translations9);

var _translations11 = require('./fr/translations.json');

var _translations12 = _interopRequireDefault(_translations11);

var _translations13 = require('./id/translations.json');

var _translations14 = _interopRequireDefault(_translations13);

var _translations15 = require('./km/translations.json');

var _translations16 = _interopRequireDefault(_translations15);

var _translations17 = require('./lo/translations.json');

var _translations18 = _interopRequireDefault(_translations17);

var _translations19 = require('./my/translations.json');

var _translations20 = _interopRequireDefault(_translations19);

var _translations21 = require('./nb/translations.json');

var _translations22 = _interopRequireDefault(_translations21);

var _translations23 = require('./prs/translations.json');

var _translations24 = _interopRequireDefault(_translations23);

var _translations25 = require('./ps/translations.json');

var _translations26 = _interopRequireDefault(_translations25);

var _translations27 = require('./pt/translations.json');

var _translations28 = _interopRequireDefault(_translations27);

var _translations29 = require('./pt_BR/translations.json');

var _translations30 = _interopRequireDefault(_translations29);

var _translations31 = require('./ru/translations.json');

var _translations32 = _interopRequireDefault(_translations31);

var _translations33 = require('./sv/translations.json');

var _translations34 = _interopRequireDefault(_translations33);

var _translations35 = require('./tet/translations.json');

var _translations36 = _interopRequireDefault(_translations35);

var _translations37 = require('./tg/translations.json');

var _translations38 = _interopRequireDefault(_translations37);

var _translations39 = require('./uk/translations.json');

var _translations40 = _interopRequireDefault(_translations39);

var _translations41 = require('./ur/translations.json');

var _translations42 = _interopRequireDefault(_translations41);

var _translations43 = require('./vi/translations.json');

var _translations44 = _interopRequireDefault(_translations43);

var _translations45 = require('./zh/translations.json');

var _translations46 = _interopRequireDefault(_translations45);

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

_d2I18n2.default.addResources('ar', namespace, _translations2.default);
_d2I18n2.default.addResources('ckb', namespace, _translations4.default);
_d2I18n2.default.addResources('da', namespace, _translations6.default);
_d2I18n2.default.addResources('en', namespace, _translations8.default);
_d2I18n2.default.addResources('es', namespace, _translations10.default);
_d2I18n2.default.addResources('fr', namespace, _translations12.default);
_d2I18n2.default.addResources('id', namespace, _translations14.default);
_d2I18n2.default.addResources('km', namespace, _translations16.default);
_d2I18n2.default.addResources('lo', namespace, _translations18.default);
_d2I18n2.default.addResources('my', namespace, _translations20.default);
_d2I18n2.default.addResources('nb', namespace, _translations22.default);
_d2I18n2.default.addResources('prs', namespace, _translations24.default);
_d2I18n2.default.addResources('ps', namespace, _translations26.default);
_d2I18n2.default.addResources('pt', namespace, _translations28.default);
_d2I18n2.default.addResources('pt_BR', namespace, _translations30.default);
_d2I18n2.default.addResources('ru', namespace, _translations32.default);
_d2I18n2.default.addResources('sv', namespace, _translations34.default);
_d2I18n2.default.addResources('tet', namespace, _translations36.default);
_d2I18n2.default.addResources('tg', namespace, _translations38.default);
_d2I18n2.default.addResources('uk', namespace, _translations40.default);
_d2I18n2.default.addResources('ur', namespace, _translations42.default);
_d2I18n2.default.addResources('vi', namespace, _translations44.default);
_d2I18n2.default.addResources('zh', namespace, _translations46.default);

_d2I18n2.default.setDefaultNamespace(namespace);
_d2I18n2.default.changeLanguage('en');

exports.default = _d2I18n2.default;