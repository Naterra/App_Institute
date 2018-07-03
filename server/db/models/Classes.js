import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ClassesSchema = new Schema({
    napravlenie: { type: String },
    fakultet: { type: String },
    time_period: { type: String },
    type_of_education: { type: String }
});

mongoose.model('Classes', ClassesSchema);
