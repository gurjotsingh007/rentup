const mongoose = require('mongoose');

let isConnected = false;

const connectDatabase = async () => {
    if (isConnected) return;

    const db = await mongoose.connect(
        "mongodb+srv://gndu:K5IXNykik3m0kAPV@cluster0.0kfb5u2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        { family: 4 }
    );

    isConnected = db.connections[0].readyState;

    console.log(`MongoDB connected: ${db.connection.host}`);
};

module.exports = connectDatabase;