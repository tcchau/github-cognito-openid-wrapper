const responder = require('./util/responder');
const controllers = require('../controllers');

module.exports.handler = (event, context, callback) => {
  if ( process.env.SLS_DEBUG ) {
    console.info( `Event: ${ JSON.stringify( event, null, 2 ) }` );
  }
  controllers(responder(callback)).jwks();
};
