import express from 'express';
import bodyParser from 'body-parser';
import * as db from './db/db';
import config from '../config/config.js';


// подключим express фреймворк
const app = express();

// выполнить подключение к базе данных
import mongoose from 'mongoose';
import './db/models/Classes';
const Classes = mongoose.model('Classes');
db.setUpConnection();

// подключим мидлвар
app.use(bodyParser.json());

// установим порт работы сервера
app.set('port', process.env.PORT || config.serverPort);

// Получить все записи классов
app.get('/api/get_classes', (req, res) => {
	Classes.find()
		.sort({ name: 'asc' })
		.exec(function(err, contacts) {
			res.send(contacts);
		});
});

app.listen(app.get('port'), () => {
	console.log(`Сервер доступен на порту ${app.get('port')}`);
});
