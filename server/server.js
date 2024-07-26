const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const multer = require('multer')

const path = require('path');

// Ensure uploads directory exists
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


const projectRoute = require('./route/projectRoute')
const fileRoute = require('./route/fileRoute')




const connectDB = require('./config/DB.js');



//configure env
dotenv.config()

//configuring database
connectDB()

//rest object
const app = express()

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


/// Configure Multer storage to keep the original file name
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });







// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD

  },

});


app.use(cors());




// //routes
app.use('/', projectRoute)
app.use('/', upload.single('file'), fileRoute)


app.post('/send', (req, res) => {
  const {email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New message`,
    text: message,
    replyTo: email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully');
  });
});





//run server
const PORT = process.env.PORT || 5500
app.listen(PORT, () => console.log("server is connected"))





