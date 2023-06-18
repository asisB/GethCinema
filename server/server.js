const express = require('express');
const app = express();
require("dotenv").config();
const dbConfig = require('./config/dbConfig');

app.use(express.json());
const userRoute = require('./routes/usersRoute');
const moviesRoute = require('./routes/moviesRoute')
const theatresRoutes = require('./routes/theatresRoutes')

app.use('/integration/users', userRoute);
app.use('/integration/movies', moviesRoute);
app.use('/integration/theatres', theatresRoutes);


const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
