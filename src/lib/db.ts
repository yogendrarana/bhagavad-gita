import mongoose from 'mongoose';

interface MongoConnection {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
}

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/gita';

if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

let cached: MongoConnection = (global as any).mongoose as MongoConnection || { conn: null, promise: null };

async function connectDb(): Promise<mongoose.Connection> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const options: mongoose.ConnectOptions = { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions;
        cached.promise = mongoose.connect(uri, options) as unknown as Promise<mongoose.Connection>;
    }

    try {
        cached.conn = await cached.promise;
        console.log('MongoDB connected');
        return cached.conn;
    } catch (err) {
        cached.promise = null;
        throw new Error(`Failed to connect to MongoDB: ${err}`);
    }
}

export default connectDb;
