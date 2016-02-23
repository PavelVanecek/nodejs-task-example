Example Node.js track application
=================================

The task is as follows:

Create a Node.js application that
- Responds only on a HTTP route "/track".
- Reads the data from request.
- Appends the data to a JSON file.
- If there is a "count" parameter in the data, the application increments the "count" value in a database by the value of given "count" parameter.

Requirements
------------

Node.js version 0.12 or newer

How to run
----------

```
npm install
npm start
```

How to test
-----------

```
npm test
```

It also accepts same options as Mocha. Development example:

```
npm test -- --watch
```
