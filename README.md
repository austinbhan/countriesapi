# Template for Backend Express

The Golden Rule:
🦸 🦸‍♂️ Stop starting and start finishing. 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Scripts

TODO: fix the db scripts

| command                | description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm start`            | starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch`  | runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`             | runs the tests once                                                                 |
| `npm run db:reset:test`| resets the test database (ADDED HERE)                                               |
| `npm run test:watch`   | continually watches and runs the tests when files are updated                       |
| `npm run db:reset`     | sets up the database (CHANGED HERE) locally                                         |
| `npm run setup-heroku` | sets up the database on heroku                                                      |
