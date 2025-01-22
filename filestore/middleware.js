const {STORAGE_PATH} = require('./config.js');
const path = require('path');
const fs = require('fs');
module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.headers['content-type'].startsWith('multipart/form-data')) {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString('binary');
        });

        req.on('end', () => {
            const boundary = req.headers['content-type'].split('boundary=')[1];
            const parts = body.split(`--${boundary}`);
            parts.forEach((part) => {
                if (part.includes('filename="')) {

                    const filename = part
                        .split('filename="')[1]
                        .split('"')[0]
                        .trim();

                    const fileData = part
                        .split('\r\n\r\n')[1]
                        .replace(/\r\n--$/, '');

                    const filePath = path.join(STORAGE_PATH, filename);
                    fs.writeFileSync(filePath, fileData, 'binary');
                }
            });
            res.status(200).json({ message: 'Файл успешно загружен' });
        });
    } else {
        next();
    }
}