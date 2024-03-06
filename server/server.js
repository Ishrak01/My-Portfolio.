const cors =require ('cors')
const dotenv= require('dotenv')
const express=require('express')
const morgan=require('morgan')
const projectRoute=require('./route/projectRoute')


const connectDB = require('./config/DB.js');



//configure env
dotenv.config()

//configuring database
connectDB()

//rest object
const app=express()

//middleware
app.use(morgan('dev'))
app.use(express.json())

app.use(cors({
  origin: ['https://ishrakhasin.com',"http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}

))




// //routes
app.use('/',projectRoute)

//run server
const PORT=process.env.PORT || 5500
app.listen(PORT,()=> console.log("server is connected"))





