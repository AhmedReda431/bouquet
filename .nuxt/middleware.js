const middleware = {}

middleware['logAuth'] = require('..\\middleware\\logAuth.js')
middleware['logAuth'] = middleware['logAuth'].default || middleware['logAuth']

export default middleware
