const pool = require('../db');

module.exports = {
  getContractors: (req, res) => {
    pool
      .query(
        'select id, company, firstname, lastname, email, rating, specialties, certifications, tools from users where contractor = true'
      )
      .then((results) => {
        res.send(results.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
