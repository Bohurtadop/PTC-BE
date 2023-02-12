import express from "express";
import companiesController from '../controllers/companies.js';

var router = express.Router();

// Basic CRUD
router.get("/", async function (req, res) {
    res.send(await companiesController.getCompanies());
});

export default router;