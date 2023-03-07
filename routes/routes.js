const { Router } = require("express");
const { inscription, getNiveau, setNiveau } = require("../controllers/ctrl");

const router = Router();

router.post("/inscription", inscription);
router.post("/niveau", getNiveau);
router.post("/set-niveau", setNiveau);

module.exports = router;
