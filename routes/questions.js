import express from "express";
import questionsController from '../controllers/questions.js';

var router = express.Router();

// Basic CRUD
router.get("/", async function (req, res) {
    res.send(await questionsController.getQuestions());
});

export default router;