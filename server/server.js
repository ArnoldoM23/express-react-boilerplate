'use-strict'
import 'babel-polyfill';
import Hapi from 'hapi';
import Glue from 'glue';
import Inert from 'inert';
import path from 'path';
import devConfig from '../config/development.json';

const options = {
  relativeTo: `${__dirname}/plugins`
};

const startServer = async () => {
  const server = await Glue.compose(devConfig, options);

  try {

    await server.register(Inert);

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: { path: 'public' }
      }
    });
  }
  catch(e) {
    console.log(`Error: ${e}`);
  }

  await server.start();
  console.log(`Server listening on ${server.info.uri}`);
};

startServer();
