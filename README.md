# react-koa-minimal-starter

A minimalist boilerplate to get started with app using React and Koa, ready to be deployed to Heroku.

The project aims to keep up with compatibility for the latest versions of the following tools:
* Koa v2.. for ES7 async/await support
* Babel v6
* React-hot-loader v3.. for removing some long-standing issues with the tool such as improved support for HOCs ([Ref](https://github.com/gaearon/react-hot-boilerplate/pull/61#issue-148980319)).

Key tools list:
* [React.js](https://facebook.github.io/react)
* [Redux](http://redux.js.org)
* [React-hot-loader](https://github.com/gaearon/react-hot-loader)
* [Koa.js](http://koajs.com)
* [koa-router](https://github.com/alexmingoia/koa-router)
* [Babel.js](https://babeljs.io)
* [Webpack](http://webpack.github.io)

## Setup

```
$ npm install
```

For Heroku support, you must have Heroku [toolbelt](https://toolbelt.heroku.com) installed.

Then create the app using

`heroku create`

Set the environment variable via

```
heroku config:set HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2)
```

## Usage

### Development:

`npm start` starts webapp.. fires webpack-dev-server
`npm run server` starts backend server

### Production:

```
npm run build && npm run deploy
```

## Folder structure

```
api
 |
 - controllers
   |
   - index.js
   - sampleController.js
 - db
   |
   - data.json
web
 |
 - actions/
 - components/
 - containers/
 - reducers/
config.js
```

## Features:

* Not using `.babelrc`

## TODO:

- [ ] Enable compatibility for UglifyJS for Babel6
- [ ] Single command to manage starting environments
- [ ] Production code should not need Babel(?)
- [ ] Improve webpack production config
- [ ] Add Gitter channel
- [ ] Live-reload for server
- [ ] Setup MongoDB integration
- [ ] Include authentication

## Contributions

Feedback, issues are welcome!

# LICENSE

MIT
