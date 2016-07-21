const env = process.env.NODE_ENV || 'development'
const config = {}

if (env === 'production') {
  config.API_URL = 'heroku_url'
}
else {
  config.API_URL = 'http://localhost:3000'
}

module.exports = config
