"use strict";

const botbuilder = require('botbuilder');
module.exports = function ( args, entityName ) {
  let entity = botbuilder.EntityRecognizer.findEntity(args.entities, entityName);
  if ( null === entity ) {
    throw new Error(`Entity ${entityName} not found`);
  } else {
    return entity.entity;
  }
}