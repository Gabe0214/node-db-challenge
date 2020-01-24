// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault : true,
    connection: {
      // location and name of database
      filename: './data/projects.db3'
    },
    pool : {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }
    },
    migrations : {
      // location of migrations for the database 
      directory: './data/migrations'
    },
    seeds: {
      // location of seed data for the database
      directory: './data/seeds'
    }
  }
};
