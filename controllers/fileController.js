const fs = require('fs');
const path = require('path');
const config = require('../config/config');
const { sendJsonResponse } = require('../utils/response');

const renderHomePage = (req, res) => {
    fs.readdir(config.filesDir, (err, files) => {
        if (err) {
            return res.render('index', { files: [], deletedFiles: [], error: 'Could not list files' });
        }

        fs.readdir(config.deletedFilesDir, (err, deletedFiles) => {
            if (err) {
                return res.render('index', { files, deletedFiles: [], error: 'Could not list deleted files' });
            }
            res.render('index', { files, deletedFiles, error: null });
        });
    });
};

const getFile = (req, res) => {
    const filePath = path.join(config.filesDir, req.params.filename);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return sendJsonResponse(res, 404, { message: 'File not found' });
            }
            return sendJsonResponse(res, 500, { message: 'Server error' });
        }
        sendJsonResponse(res, 200, { content: data });
    });
};

const createFile = (req, res) => {
    const filePath = path.join(config.filesDir, `${req.body.filename}.${req.body.filetype}`);
    const content = req.body.content;

    fs.writeFile(filePath, content, err => {
        if (err) {
            return res.redirect('/?error=Could not create file');
        }
        res.redirect('/');
    });
};

const deleteFile = (req, res) => {
    const filePath = path.join(config.filesDir, req.params.filename);
    const deletedFilePath = path.join(config.deletedFilesDir, req.params.filename);

    fs.rename(filePath, deletedFilePath, err => {
        if (err) {
            return res.redirect('/?error=Could not delete file');
        }
        res.redirect('/');
    });
};

const restoreFile = (req, res) => {
    const deletedFilePath = path.join(config.deletedFilesDir, req.params.filename);
    const filePath = path.join(config.filesDir, req.params.filename);

    fs.rename(deletedFilePath, filePath, err => {
        if (err) {
            return res.redirect('/?error=Could not restore file');
        }
        res.redirect('/');
    });
};

const permanentDeleteFile = (req, res) => {
    const deletedFilePath = path.join(config.deletedFilesDir, req.params.filename);

    fs.unlink(deletedFilePath, err => {
        if (err) {
            return res.redirect('/?error=Could not permanently delete file');
        }
        res.redirect('/');
    });
};

module.exports = {
    renderHomePage,
    getFile,
    createFile,
    deleteFile,
    restoreFile,
    permanentDeleteFile
};
