const router = require("express").Router();
const Email = require("../models/email-verification");
const Journey = require("../models/journey");
const status = require("../models/relations");
const { Sequelize } = require("sequelize");

router.get("/addJourney", async (req, res) => {
  const data = await Journey.create({
    name: "hellooJourney",
  });
  res.send(data);
});

router.get("/addEmail", async (req, res) => {
  const obj = {
    email: "helloo@gmail.com",
    status: "verified",
    token: "dxdiagasasd5asd2asdasdas9",
    tokenExpiresIn: "2-2-2020",
    order: 1,
  };
  const data = await Email.create({
    step: obj,
    journeyId: 1,
  });
  res.send(data);
});

router.get("/getJourney", async (req, res) => {
  Journey.findAll()
    .then(function (journey) {
      res.send(journey);
    })
    .catch(function (err) {
      res.send("Oops! something went wrong, : ", err);
    });
});

router.get("/getEmail", async (req, res) => {
  Email.findAll()
    .then(function (email) {
      res.send(email);
    })
    .catch(function (err) {
      res.send("Oops! something went wrong, : ", err);
    });
});

router.get("/filterEmail", async (req, res) => {
  const email = "helloo@gmail.com";
  Email.findAll({
    where: {
      "step.email": email,
    },
  })
    .then(function (email) {
      res.send(email);
    })
    .catch(function (err) {
      res.send("Oops! something went wrong, : ", err);
    });
});

module.exports = router;
