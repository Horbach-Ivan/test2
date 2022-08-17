let express = require('express')
let app = express();

const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const bodyParser = require('body-parser')
app.use(bodyParser.json()) 
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'First API docs',
            description: 'The description of people and messages',
            contacts: {
                name: 'Ivan Horbach',
                email: 'minsk17sanyo@gmail.com'
            },
            servers: ['http://localhost:3002'],
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.js']
}
const swggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swggerDocs))

const dotenv = require('dotenv')
const port = process.env.PORT

const routes = require('./routes/index')
app.use('/api', routes)

app.listen(3002, ()=> console.log('cервак на старте готов все отдать все забрать'))