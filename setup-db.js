/* eslint-disable no-console */
const pool = require('./sql/pool');
const setup = require('./lib/data/setup');

setup(pool)
  .catch((err) => console.error(err))
  .finally(() => process.exit());
