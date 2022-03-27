const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

router.post("/login", (req, res) => {
  console.log(req.body);
  const aadhaarNumber = req.body.aadhaarNumber;

  if (aadhaarNumber === 999999999999) {
    // @TODO
    res.json({
      isOperator: false,
    });
    res.sendStatus(200);
  } else if (aadhaarNumber === 888888888888) {
    res.json({
      isOperator: true,
    });
    res.sendStatus(200);
  } else res.sendStatus(401);
});

// register complains
// get complains
// assign complain
// complete complain

module.exports = router;
