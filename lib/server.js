'use strict';
'use-strict';

require('babel-polyfill');

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _glue = require('glue');

var _glue2 = _interopRequireDefault(_glue);

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _development = require('../config/development.json');

var _development2 = _interopRequireDefault(_development);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var options = {
  relativeTo: __dirname + '/plugins'
};

var startServer = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var server;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _glue2.default.compose(_development2.default, options);

          case 2:
            server = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return server.register(_inert2.default);

          case 6:

            server.route({
              method: 'GET',
              path: '/{param*}',
              handler: {
                directory: { path: 'public' }
              }
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](3);

            console.log('Error: ' + _context.t0);

          case 12:
            _context.next = 14;
            return server.start();

          case 14:
            console.log('Server listening on ' + server.info.uri);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[3, 9]]);
  }));

  return function startServer() {
    return _ref.apply(this, arguments);
  };
}();

startServer();