const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME || "test"; 

export const connectionStr = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@cluster0.o4ppy.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
