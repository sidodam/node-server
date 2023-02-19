const express = require("express");

const router = express.Router();

const {
  createPerson,
  getPersons,
  getPersonById,
} = require("../controllers/personController");

router.get("/", getPersons);
router.post("/create", createPerson);
router.get("/:id", getPersonById);

module.exports = router;
