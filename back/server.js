import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
// import mongoose from "mongoose"

// Importation des données permises par le fichier "user.js" :
import user from "./router/user.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI, {dbName: process.env.DB_NAME}).then(() => console.log("Connection à MongoDB réussie !")).catch(error => console.log(error))

app.use(express.json());
app.use("/api/user", user )

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})

