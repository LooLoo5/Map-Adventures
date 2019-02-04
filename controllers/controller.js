const db = require("../models");

module.exports = {
  createGym: function(req, res) {
    db.Gym
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getGyms: function(req, res) {
    db.Gym
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createRaid: function(req, res) {
    db.Raid
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
