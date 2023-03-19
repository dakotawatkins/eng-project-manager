# Engineer Project Manager Back-end

## Installation

1. Fork / clone this repository.
1. Navigate to /back-end folder run `npm install`.

Set the `.env` variables to the database urls (ex: postgres://...). Check `.env.sample` file for template.

Navigate to /back-end folder and use `npm start` to run the backend application.

## Features

holds migration files to build the table structure in the database.
`npx knex migrate:latest` builds tables in DB.

`npx knex seed:run` runs seed files to fill tables in DB with 'dummy' data.

### Github

`git init` creates repo in current directory.
`git add .` addes ALL updated files to be commited.
`git commit -m "ex: initial commit"` commits changes.
`git remote add origin https://github.com/dako....end-proj...git` attaches repo to github repo.
`git push -u origin main` pushes `main` branch to `origin` url (github).

`git status` shows status of repository. Shows a list of files that are changes, or added, or nothing if commited.
`git remote -v` shows a list of urls the repo is using.
