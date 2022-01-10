export default () => ({
  database: {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DATABASE_SHCEMA,
    entities: ['dist/**/**.entity{.ts,.js}'],
    // synchronize: true,
  },
});
