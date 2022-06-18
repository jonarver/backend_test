const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, (req, res) => {
  return res.send({ message: "Everything ok in the GET method for root" });
});

router.post("/", (req, res) => {
  return res.send({ message: "Everything ok in the POST method for root" });
});

const install = app => app.use("/", router);

module.exports = {
  install
};
