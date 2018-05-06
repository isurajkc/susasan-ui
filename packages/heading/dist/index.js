'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tfont-size: 37px\n'], ['\n\tfont-size: 37px\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tfont-size: 28px;\n'], ['\n\tfont-size: 28px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tfont-size: 21px\n'], ['\n\tfont-size: 21px\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tfont-size: 18px\n'], ['\n\tfont-size: 18px\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = _styledComponents2.default.span(_templateObject, function (props) {
  return '\n\t   color: ' + (props.light ? '#fff' : '#333') + ';\n\t   font-weight: 600;\n       ' + (props.uppercase && '\n            text-transform: uppercase;\n       ') + ' \t   \n       \n  ';
});

Heading.displayName = 'Heading';

Heading.h1 = Heading.withComponent('h1').extend(_templateObject2);
Heading.h1.displayName = 'Heading.h1';

Heading.h2 = Heading.withComponent('h2').extend(_templateObject3);
Heading.h2.displayName = 'Heading.h2';

Heading.h3 = Heading.withComponent('h3').extend(_templateObject4);
Heading.h3.displayName = 'Heading.h3';

Heading.h4 = Heading.withComponent('h4').extend(_templateObject5);
Heading.h4.displayName = 'Heading.h4';

exports.default = Heading;