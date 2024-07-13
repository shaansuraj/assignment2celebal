const express = require('express');
const path = require('path');
const config = require('./config/config');
const logger = require('./middlewares/logger');
const fileRoutes = require('./routes/fileRoutes');
const methodOverride = require('method-override');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/', fileRoutes);

app.listen(config.port, () => {
    console.log(`Server running at http://localhost:${config.port}/`);
});
