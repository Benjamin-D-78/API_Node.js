// Ici, nous avons besoin d'importer les dépendances.
// On pourrait importer directement la dépendance que l'on a par défaut dans les nodes_modules, avec "const express = require("express")
// Ici on fait une modification dans le fichier "package.json"
// Nous allons donc rajouter manuellement ""type": "module",". Cela nous permet ensuite d'importer les choses sous la forme de syntaxe que l'on ci-dessous :

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

// ROUTES
import user from "./router/user.js"


// Nous générons maintenant un objet "app" égale à ce que l'on apporte (ici express est une fonction) :
// Attention, nous avons absolument besoin des deux lignes : "import dotenv" et "dotenv.config" pour que tout fonctionne.
dotenv.config();
const app = express();
// PORT : "process" permet d'aller chercher des variables spécifiées dans un fichier. Ici nous allons dans le fichier ".env" puis on va chercher "PORT". Mais si cette variable n'existe pas ou que le fichier ne la trouve pas, par défaut nous utiliserons ici le PORT fournit par notre PC : 8000.
const PORT = process.env.PORT || 8080;

//DATABASE - Fait la connection avec notre BDD à l'aide du lien que l'on a mis dans le fichier "user.js"
mongoose.connect(process.env.MONGO_URI, {dbName: process.env.DB_NAME}).then(() => console.log("Connection à MongoDB réussie !")).catch(error => console.log(error))


// MIDDLEWARES : Les middleware doivent toujours être positionnés AVANT les préfixes (use router).
// Ce Middleware permet d'intercepter toutes les requêtes.
app.use(express.json());

// USE ROUTER : Prrmet de communiquer avec les URL
//On met "use" car ce sont des fonctions qui s'exécuteront automatiquement sans que l'on ai besoin de les appeler.
// Quand notre API va intercépter notre requête, et si notre API commence par "api/user", elle va nous envoyer directement via l'url concerné. Ici, /api/user sera à ajouter à notre "http://localhost" suivi de l'urel "all" que l'on a définit dans notre "user.js".
app.use("/api/user", user)

// SERVER LISTEN
// On appelle la const app que l'on a définit plus haut. Notre fonction a besoin de deux paramètres : le PORT et notre fonction anonyme.
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})