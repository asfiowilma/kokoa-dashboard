const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? '/kokoa-dashboard' : '',
  'process.env.API_URL': 'http://localhost:8000',
}