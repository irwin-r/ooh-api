<h1 align="center">ooh-api</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> A RESTful API for managing shopping centre locations & their respective assets.

## Foreword/Rationale

I'm a big fan of frameworks like [Nest.js](https://nestjs.com/), which make it really hard to do the wrong thing.  In a technical test, however, that's probably not the best way to demonstrate understanding or skill.

So, with this technical test, I've opted to utilise a relatively vanilla Express solution with little in the way of external dependencies.  At present, I've only really used the following:

- [Boom](https://github.com/hapijs/boom) - Hapi's library which makes it cleaner to throw exceptions
- [Celebrate](https://github.com/arb/celebrate) - A wrapper around Hapi's Joi, providing payload JSON schema validation
- [Pino](https://github.com/pinojs/pino) - A very fast logging library, although in hindsight, there wasn't much logging :p
- [Sequelize](https://github.com/sequelize/sequelize) - By far the heaviest dependency in the project.  A full-blown, multi-flavour, SQL ORM

## Checklist

- [x] **MUST** have an API server written in JavaScript
- [x] **MUST** have routes for Shopping Centres
- [x] **MUST** have routes for Assets
- [x] **MUST** persist data to a database using some flavour of SQL
- [ ] **MUST** contain tests using a testing framework
- [ ] **SHOULD** track which user makes changes to the data
- [x] **SHOULD** allow marking Assets “inactive” for when they’re receiving maintenance, and re-activating them later
- [ ] **COULD** have a UI (but don’t worry about UX)
- [ ] **COULD** support searching for Assets by Name, Shopping Centre, or Status

## Install

```sh
yarn
```

## Usage

```sh
yarn start
```

## Run tests

```sh
yarn test
```

## Author

👤 **Irwin Razaghi <irwin@razaghi.com.au>**

* Github: [@irwin-r](https://github.com/irwin-r)