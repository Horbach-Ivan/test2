let express = require('express')
let app = express();
const routes = require('./routes/index')
const port = 3002;


app.listen(port, ()=> console.log('cервак на старте готов все отдать все забрать'))
app.use('/api', routes)
