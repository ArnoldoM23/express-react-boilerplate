'use strict';
'use-strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var internals = {};

var responseSchema = {
  firstName: _joi2.default.string().required(),
  lastName: _joi2.default.string().required()
};

module.exports = {
  description: 'description of controller',
  tags: ['tags'],
  validate: {
    payload: {
      test: _joi2.default.string()
    }
  },
  response: {
    schema: responseSchema
  },
  handler: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response, h) {
      var payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = {
                firstName: 'First',
                lastName: 'Last'
              };
              return _context.abrupt('return', h.response(payload));

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    function handler(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return handler;
  }()
};