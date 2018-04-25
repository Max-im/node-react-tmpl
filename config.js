const env = process.env;

const config = {
    port: env.port || 3000,
    host: env.host || '0.0.0.0',
}

module.exports.config = config;