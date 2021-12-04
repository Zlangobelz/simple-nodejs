export default {
    client: 'mysql',
    version: '5.7',
    connection: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_CONTAINER_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    },
    migrations: {
        tableName: 'migrations',
        directory: './database/migrations',
        loadExtensions: ['.mjs']
    }
}