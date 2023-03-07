# Database Initialization Instruction

1. make sure you have MongoDB installed and running. For MacOS: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
2. go to `/backend`, run the server by `node app.js`.
3. open another terminal, go to `/backend` and run `populate_db.js`. The script will create a new DB called `housingapp` if it doesn't exist before, and will populate `user`, `listing`, and `image` collection in the db, as well as create gridfs storage that actually sorts all the image files.
4. Inspect the database and make sure all data are inserted.
