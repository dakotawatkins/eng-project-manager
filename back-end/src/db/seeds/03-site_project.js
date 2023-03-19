const site_project = require("./03-site_project.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE site_project RESTART IDENTITY CASCADE")
      /** inserts all site_project into the site_project table */
      .then(() => knex("site_project").insert(site_project))
  );
};
