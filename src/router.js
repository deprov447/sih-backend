const findBestDistance = require('./distance-logic/findBestDistance')
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Complain = require("./schema/complainSchema");

router.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

// Login
router.post("/login", (req, res) => {
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
router.post("/complains/new", async (req, res) => {
  const complainData = req.body;
  await new Complain(complainData)
    .save()
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// get complains
router.get("/complains/page/:pg", (req, res) => {
  const pageNo = parseInt(req.params.pg);
  Complain.find({})
    .limit(10)
    .skip(10 * pageNo)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// assign complain
router.patch("/complains/:id", (req, res) => {
  //  const complainId = req.params.id;
   const agentId = req.params.id;
  //  console.log(agentId);
  const origin=req.body.location;
  const toBeAssigned = Complain.find({}).then((data) => findBestDistance(origin,data));
  Complain.findOneAndUpdate(
    { _id: toBeAssigned },
     { agentId: agentId, isAssigned: true ,isAssigned:true}
   )
  .then((data) => {
       res.sendStatus(202);
     })
     .catch((err) => {
       console.error(err);
       res.sendStatus(500);
     });
});

// complains by user
router.get("/complains/:id/page/:pg", (req, res) => {
  const userId = req.params.id;
  const pageNo = parseInt(req.params.pg);
  Complain.find({ userId })
    .limit(10)
    .skip(10 * pageNo)
    .then((data) => res.json(data))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// complete complain
router.get("/complains/:id/completed", (req, res) => {
  const complainId = req.params.id;
  Complain.findOneAndUpdate({ _id: complainId }, { isCompleted: true })
    .then((data) => {
      res.sendStatus(202);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// feedback
router.patch("/complains/:id/completed", (req, res) => {
  const complainId = req.params.id;
  const { stars, content } = req.body;
  Complain.findOneAndUpdate(
    { _id: complainId },
    { feedback: { stars, content } }
  )
    .then((data) => {
      res.sendStatus(202);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
