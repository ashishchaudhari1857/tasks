const express = require("express");
const app = express();
const dotenv = require('dotenv');
const noteRoute = require('./routes/note');
const cors = require('cors');
const sequelize = require('./config/db');

dotenv.config();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/api/notes' ,noteRoute)


sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synchronization complete.');
    
    app.listen(3000, () => {
      console.log('Server connected on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });

