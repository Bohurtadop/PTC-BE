import express from "express";
import answersController from '../controllers/answers.js';

var router = express.Router();

// Basic CRUD
router.get("/", async function (req, res) {
    res.send(await answersController.getAnswers());
});

router.post("/", async function (req, res) {
    res.send(await answersController.insertAnswers(req.body));
});

export default router;