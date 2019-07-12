import { Mongo } from 'meteor/mongo';

export const authorizations = new Mongo.Collection('authorizations');
export const entityAuthorizations = new Mongo.Collection('entity_authorizations');