const express = require("express")
const Sequelize = require('sequelize')

let sequelize  = new Sequelize('profile', 'root', 'password', {
        dialect: "mysql",
        host: "aar7jeifk9xq9b.ccmgtnfn5td6.us-east-2.rds.amazonaws.com",
        port: 3306
    })


sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch(() => {
    console.log("Unable to connect to database")
})

const Messages = sequelize.define('messages', {
    subject: Sequelize.STRING,
    name: Sequelize.STRING,
    message: Sequelize.TEXT
})

const app = express()

app.use('/', express.static('frontend'))


app.get('/createdb', (request, response) => {
    sequelize.sync({force:true}).then(() => {
        response.status(200).send('tables created')
    }).catch((err) => {
        console.log(err)
        response.status(200).send('could not create tables')
    })
})

app.use(express.json())
app.use(express.urlencoded())


app.listen(process.env.PORT||8080)



