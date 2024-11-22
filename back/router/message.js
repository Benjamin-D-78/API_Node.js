import express from "express"
import Message from "../models/message-model.js";

const router = express.Router();

// GET : Si on précise "async", il faut préciser "await"
router.get("/all", async (req, res) => {
    try{
        const response = await Message.find()
        res.status(200).json({response})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// GET BY ID
router.get("/find/:idMessage", async (req, res) => {
    try{
        const response = await Message.findById(req.params.idMessage)
        res.status(200).json({response})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// POST
router.post("/add", async (req, res) => {
    try {
        const response = await Message.create(req.body)
        res.status(201).json({response})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// PUT
router.put("/update/:idMessage", async (req, res) => {
    const userId = req.body.id
    try {
        const message = await Message.findById(req.params.idMessage)

        if(message.user.toString() === userId){
            const response = await Message.findByIdAndUpdate(
            req.params.idMessage,
            req.body,
            {new:true})
        res.status(200).json({response})
    } else {
        res.status(403).json({error: "Vous n'êtes pas l'auteur de ce message."})
    }
    } catch {
        res.status(500).json({error : error.message})
    }
})

// DELETE
router.delete("/delete/:idMessage", async (req, res) => {
    const userId = req.body.id
    try {
        const message = await Message.findById(req.params.idMessage)
        if(message.user.toString() === userId) {

        const response = await Message.findByIdAndDelete(
            req.params.idMessage)
            res.status(200).json({response})
    } else {
        res.status(403).json({error: "Vous n'êtes pas l'auteur de ce message."})
    }
    } catch {
        res.status(500).json({error : error.message})
    }
})

// Exportation de tous nos routers configurés :
export default router;