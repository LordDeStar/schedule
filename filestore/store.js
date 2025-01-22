const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const middleware = require('./middleware.js');
const {STORAGE_PATH} = require('./config.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware);



if (!fs.existsSync(STORAGE_PATH)) {
    fs.mkdirSync(STORAGE_PATH);
}


app.post('/upload', (req, res) => {
    // Всю обработку выполняет middleware выше
});

app.get('/download', (req, res) => {
    const { filename } = req.query;

    if (!filename) {
        return res.status(400).json({ error: 'Имя файла не указано' });
    }

    const filePath = path.join(STORAGE_PATH, filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Файл не найден' });
    }

    res.download(filePath, filename, (err) => {
        if (err) {
            console.error('Ошибка при отправке файла:', err);
            res.status(500).json({ error: 'Не удалось отправить файл' });
        }
    });
});

app.listen(3501, () => {
    console.log('Сервер запущен на http://localhost:3501');
});