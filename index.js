const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');
const lysdRoutes = require('./routes/lysdRoutes');
const floraRoutes = require('./routes/floraRoutes');
const rainingRoutes = require('./routes/rainingRoutes'); // New
const waterLevelRoutes = require('./routes/waterLevelRoutes'); // New
const fanStateRoutes = require('./routes/fanStateRoutes'); // New
const waterPumpStateRoutes = require('./routes/waterPumpStateRoutes'); // New

const path = require("path");

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/flora', floraRoutes);
app.use('/api/lysd', lysdRoutes);
app.use('/api/raining', rainingRoutes); // New route
app.use('/api/waterLevel', waterLevelRoutes); // New route
app.use('/api/fanState', fanStateRoutes); // New route
app.use('/api/waterPumpState', waterPumpStateRoutes); // New route

// static_files
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});