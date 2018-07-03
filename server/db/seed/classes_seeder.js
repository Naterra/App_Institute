import * as db from '../db';

// выполнить подключение к базе данных
import mongoose from 'mongoose';
import '../models/Classes';
const Classes = mongoose.model('Classes');
db.setUpConnection();

const classes =[
    new Classes({id:1, napravlenie:'Компьютерные науки', fakultet:"Факультет информатики и вычислительной техники", time_period:'4.6', type_of_education:"очная/заочная"}),
    new Classes({id:2, napravlenie:'Компьютерная инженерия', fakultet:"Факультет информатики и вычислительной техники", time_period:'4.6', type_of_education:"очная/заочная"}),
    new Classes({id:3, napravlenie:'Программная инженерия', fakultet:"Факультет информатики и вычислительной техники", time_period:'4.6', type_of_education:"очная/заочная"}),
    new Classes({id:4, napravlenie:'Системная инженерия', fakultet:"Факультет информатики и вычислительной техники", time_period:'4.6', type_of_education:"очная/заочная"}),
    new Classes({id:5, napravlenie:'Прикладная математика', fakultet:"Факультет информатики и вычислительной техники", time_period:'4.6', type_of_education:"очная/заочная"}),
    new Classes({id:6, napravlenie:'Безопасность информационных и коммуникационных систем', fakultet:"Факультет информатики и вычислительной техники", time_period:'4.6', type_of_education:"очная/заочная"}),
    new Classes({id:7, napravlenie:'Системный анализ', fakultet:"Факультет информатики и вычислительной техники", time_period:'4.6', type_of_education:"очная/заочная"}),
    new Classes({id:8, napravlenie:'Компьютерные науки', fakultet:"Факультет информатики и вычислительной техники", time_period:'4.6', type_of_education:"очная/заочная"})
];



var done = 0;
for (var i = 0; i < classes.length; i++) {
    classes[i].save(function(err, result) {
        done++;
        if (done === classes.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

