import mongoose from 'mongoose';
import config from '../../config/config.js';

mongoose.Promise = global.Promise;

export function setUpConnection() {
	mongoose.connect(config.mongo_URL, {
		keepAlive: true,
		reconnectTries: Number.MAX_VALUE,
		useMongoClient: true
	});
}
