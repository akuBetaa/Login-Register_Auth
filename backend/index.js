import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
// import Users from "./models/UserModel.js"; (import untuk membuat tabel Users)
import router from "./routes/index.js";

dotenv.config();

const app = express();
const port = 3005;

try {
    await db.authenticate();
    console.log ('Database connected....');
    // await Users.sync(); (untuk membuat table di mysql)
} catch (error) {
    console.error(error);
}


//express.jeson untuk menerima data dalam bentuk json
app.use(express.json());
//Midleware
app.use(router);

app.listen(port, () => console.log(`Server running at port ${port}`))