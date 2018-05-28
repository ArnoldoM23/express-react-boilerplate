'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _exampleController = require('./example-controller');

var _exampleController2 = _interopRequireDefault(_exampleController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var internals = {};

exports.register = function (server, options) {

  server.bind({ options: options });

  server.dependency([], internals.register.bind({ options: options }));
};

internals.register = function (server) {

  server.route({ path: '/example', method: 'POST', config: _exampleController2.default });
};

exports.register.attributes = {
  pkg: require('../../../package.json')
};

exports.name = 'Example';