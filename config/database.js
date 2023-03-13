module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfmcp25a499591e0ehj0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_x7my'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'DwLOVTpsFBhqIKfllpH46gHRUw9cisU7'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
