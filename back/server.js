import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
// import mongoose from "mongoose"

// Importation des données permises par le fichier "user.js" :
import User from "./router/user.js"
import Message from "./router/message.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI_LOCAL, {dbName: process.env.DB_NAME}).then(() => console.log("Connection à MongoDB réussie !")).catch(error => console.log(error))

// Définition de nos middlewares :

app.use(express.json());
app.use("/api/user", User)
app.use("/api/message", Message)

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})

