import { connect } from 'mongoose';
import { dbConnectionString } from '../config';

async function connectToDatabase() {
    try {
        const connection = await connect(dbConnectionString, { useNewUrlParser: true });
        console.log("MONGO CONNECTED");

        return connection;
    } catch (error) {
        console.log("MONGO ERROR: ", error);
        return null;
    }
}

export default connectToDatabase;