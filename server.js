require('dotenv').config();
// creating an instance of express
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./route/route');
const port = process.env.PORT || 400;



// connecting to MONGODB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.connection.once('open', () => {
    console.log('Connected to database successfully....')
}).on('error', () => {
    console.log('Database connection failed.....')
});


// creating an instance of express
const app = express();

app.use(cors());
app.use(express.json());
app.use('./uploads', express.static('public'))


app.get('/', (req, res) => {
    res.send({"message": "The API for CodeLab Student is fully ready for consumption."})
});
    
}
app.use('/api/students/image', express.static('./uploads'))
app.use('/api', router);


// listen to the port
app.listen(port, () => {
  console.log(`Connecting to port ${port}`);
});