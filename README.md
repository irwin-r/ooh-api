<h1 align="center">ooh-api</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> A RESTful API for managing shopping centre locations & their respective assets.

## Foreword/Rationale

I'm a big fan of frameworks like [Nest](https://nestjs.com/), which make it really hard to do the wrong thing.  In a technical test, however, that's probably not the best way to demonstrate understanding or skill.

So, with this technical test, I've opted to utilise a relatively vanilla Express solution with little in the way of external dependencies.  At present, I've only really used the following:

- [Boom](https://github.com/hapijs/boom) - Hapi's library which makes it cleaner to throw exceptions
- [Celebrate](https://github.com/arb/celebrate) - A wrapper around Hapi's Joi, providing payload JSON schema validation
- [Pino](https://github.com/pinojs/pino) - A very fast logging library, although in hindsight, there wasn't much logging :p
- [Sequelize](https://github.com/sequelize/sequelize) - By far the heaviest dependency in the project.  A full-blown, multi-flavour, SQL ORM

Also, none of this was derived from any third-party boilerplate.  Feel free to scrutinise the commit history to see how this project got to where it is :P

## Checklist

- [x] **MUST** have an API server written in JavaScript
- [x] **MUST** have routes for Shopping Centres
- [x] **MUST** have routes for Assets
- [x] **MUST** persist data to a database using some flavour of SQL
- [x] **MUST** be secured against anonymous access
- [x] **MUST** contain tests using a testing framework
- [ ] **SHOULD** track which user makes changes to the data
- [x] **SHOULD** allow marking Assets “inactive” for when they’re receiving maintenance, and re-activating them later
- [ ] **COULD** have a UI (but don’t worry about UX)
- [x] **COULD** support searching for Assets by Name, Shopping Centre, or Status

## Regrets/Thoughts

- ESM (ECMAScript Modules -- .mjs) rock, but there are many gotchas around them;
- A lot of libraries (i.e. Celebrate, Sequelize) don't have their exports defined in a manner which allows you to directly grab them from an `import` directive.
- As ESM are still in an experimental phase, there's no support for stubbing/proxying objects, which makes testing difficult
- With the above in mind, we're forced to leverage a third-party Sequelize library to provide mocks, which does a sub-par job and doesn't handle querying well nor does it allow C/U/D operations.
- Having not used Sequelize in a while, nor previously in conjunction with ESM, these issues were an unpleasant surprise :P
- ORMs make a case against DAOs as you're essentially doubling up in a lot of areas, but DAOs and the CQRS pattern are great for testability.  That said, as a result of ESMs not supporting function proxying, their use case was invalidated in this example :(


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
