import * as migrationState from './tables/migration-state.js';
import * as model from './tables/model.js';
import * as relChild from './tables/rel-child.js';
import * as relParent from './tables/rel-parent.js';
import aws from '../core/aws.js';

export default (table) => ({
  'migration-state': aws.dy.Model(migrationState),
  model: aws.dy.Model(model),
  'rel-child': aws.dy.Model(relChild),
  'rel-parent': aws.dy.Model(relParent)
}[table]);
