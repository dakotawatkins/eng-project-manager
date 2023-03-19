const project_info = require("./02-project_info.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE project_info RESTART IDENTITY CASCADE")
      /** inserts all project_info into the project_info table */
      .then(() => knex("project_info").insert(project_info))
  );
};
