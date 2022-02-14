const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("recive");
  res.send("Requiste");
});
console.log("");
module.exports = router;
