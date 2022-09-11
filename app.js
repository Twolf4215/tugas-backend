const express = require('express')
const response = require('./helpers/response')
const routes = require('./routes')
const app = express()

const port = process.env.PORT || 2603

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async (req, res, next) => {
    res.status(200).send({
        message:"Hello wordl"
    })
})

//routes
routes(app)

app.use(cors())
// //Error 
// app.use(response.errorHandler())

//App listen
app.listen(port, () => {
    console.log(`server connected to port ${port}`)
})