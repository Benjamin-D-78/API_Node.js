// On met ici toutes les routes qui concernent les requêtes des utilisateurs.
import express from "express"

// Nous avons ici besoin de récupérer la fonction "router".
const router = express.Router();

// Une fois que l'on a tout ça, on a besoin de récupérer les données des utilisateurs (GET, POST, PUT, DELETE).
// Il faut ensuite que l'on fasse le pont de liaison entre "user.js" et "server.js" avec notre ligne de fin "export default router".

//GET
// On déclare ici router suivi de la méthode, qui prend deux paramètres. L'URL "all" permet de récupérer tous les URL, "req" permet de récupérer des données. "res" permet d'envoyer une réponse qui sera récupérée dans front.
// On définit les status (200, 201, 400, 404, etc.). On met ".json" car on envoie nos données en format JSON, dans lequel il y a en général des objets (d'où les accolades).
// "post", pour une requête exécutée, est 201
//GET
router.get("/all", (req, res) => {
    res.status(200).json({
        response: "L'élément a été récupéré avec succès.",
        data: user
    })
})

//GET BY ID
// Pour spécifier un paramètre, on ajoute après le slash ":" suivi du nom du paramètre (id, etc.)
router.get("/find/:idUser", (req, res) => {
    console.log(req.params.idUser);
    res.status(200).json()
})

//POST : On met en place le middleware en format json et on récupère avec req.body
router.post("/add", (req, res) => {
    console.log(req.body)
    res.status(201).json({
        response: "L'élément a été envoyé avec succès.",
        data: req.body
    })
})

//PUT
router.put("/update/:idUser", (req, res) => {
    // C'est dans cette fonction que l'on met le code de traitement pour modifier notre élément.

    res.status(200).json("L'élément a bien été modifié.")
})

//DELETE
router.delete("/delete/:idUser", (req, res) => {

    res.status(200).json("L'élément a bien été supprimé.")
})

// On exporte ici tous les routers que l'on a configuré.
export default router;