const express = require('express')
const app = express()
const port = 7000
const connectdb = require('./config/connectdb')
require('dotenv').config()
connectdb()

app.use(express.json())

app.use('/user', require('./Routes/authUserRoutes'))
app.use('/product', require('./Routes/productRoutes'))
app.use('/usersmanage', require('./Routes/manageUserRoutes'))
app.use('/usercart', require('./Routes/clientRoutes'))
app.listen(port, (error) => error ?console.log(error):console.log(`Server listening on port ${port}!`))