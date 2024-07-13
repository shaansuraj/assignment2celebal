const path = require('path');

module.exports = {
    port: process.env.PORT || 3000,
    filesDir: path.join(__dirname, '..' , 'files'),
    deletedFilesDir: path.join(__dirname, '..' , 'deleted')
};
