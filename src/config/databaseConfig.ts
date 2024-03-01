const databaseConfig = () => ({
  database: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    autoLoadEntities: true,
    synchronize: process.env.DB_SYNC === 'true',
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    migrationsRun: true,
    retryAttempts: 2,
    seeds: [],
  },
});
export default databaseConfig;
