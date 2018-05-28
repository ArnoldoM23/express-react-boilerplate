'use-strict';

import Joi from 'joi';

const internals = {};

const responseSchema = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required()
};

module.exports = {
  description: 'description of controller',
  tags: ['tags'],
  validate: {
    payload: {
      test: Joi.string()
    }
  },
  response: {
    schema: responseSchema
  },
  handler: async (response, h) => {

    const payload = {
      firstName: 'First',
      lastName: 'Last'
    };

    return h.response(payload);
  }
};
