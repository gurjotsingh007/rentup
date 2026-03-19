const app = require('./app');
const connectDatabase = require('./config/db');
const cloudinary = require('cloudinary').v2;

// connect DB
connectDatabase();

// cloudinary config
cloudinary.config({
    cloud_name: 'dl8uix1z9',
    api_key: '786211711552324',
    api_secret: 'U9wVS1ywp2haJbd_CTOAVK3hrHk',
    secure: true
});

// ✅ IMPORTANT: EXPORT APP
module.exports = app;