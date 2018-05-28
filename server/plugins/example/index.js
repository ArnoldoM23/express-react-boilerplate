import Joi from 'joi';
import ExampleController from './example-controller';

const internals = {};

exports.register = (server, options) => {

  server.bind({ options });

  server.dependency([], internals.register.bind({ options }));

};

internals.register = (server) => {

  server.route({ path: '/example', method: 'POST', config: ExampleController });

};

exports.register.attributes = {
  pkg: require('../../../package.json')
};

exports.name = 'Example'
