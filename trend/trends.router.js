const { Router } = require("express");
const { getCards, getNewCard } = require("./trends.controller");
const mongoose = require("mongoose");

const router = Router();

// CRUD

// 2. R - Read
router.get("/", getCards);

// router.get("/:id", getContactById);
router.get("/new", getNewCard);

exports.trendsRouter = router;
