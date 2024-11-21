import express from "express"

const router = express.Router();

// Définition de nos middlewares :

// GET
router.get("/all", (req, res) => {
    res.status(200).json({
        response: "L'élément a été récupéré avec succès !",
        data: user
    })
})

// GET BY ID
router.get("/find/:idPurekrea", (req, res) => {
    console.log(req.params.idUser);
    res.status(200).json()
})

// POST
router.post("/add", (req, res) => {
    console.log(req.body)
    res.status(201).json({
        response: "L'élément a été envoyé avec succès !",
        data: req.body
    })
})

// PUT
router.put("/update/:idPurekrea", (req, res) => {
    res.status(200).json("L'élément a bien été modifié !")
})

// DELETE
router.delete("/delete/:idPurekrea", (req, res) => {
    res.status(200).json("L'élément a été supprimé avec succès !")
})

// Exportation de tous nos router configurés :
export default router;