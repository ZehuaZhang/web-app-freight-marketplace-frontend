# Convoy Frontend

Designed Convoy Offer and My Job Page

For applications, since we don't really have api to call, clicking directly applied to My Jobs
Applications persist when reopeninig the browser via local storage

Initial, Show More & Sorting Type fetch is guaranteed for exact 3 offers
Retry 3 times when a 500 occurs

Main app with hidden scroll bar, and would scroll to top when a new sorting is clicked
Animations and transitions added on both user interactions, and on fetch status

Header, Footer, 2 Sortings are sticky, and Added a status bar on footer

Designed with Redux and Hot Reload for easy debugging

## How tos

### Installation

```
$ npm ci
```

### Run

```
$ npm start
```

### Build

```
$ npm run build
```

## Libraries Applied

- [x] [Typescript](https://www.typescriptlang.org/) 3
- [x] [React](https://facebook.github.io/react/) 16.8
- [x] [Redux](https://github.com/reactjs/redux) 4
- [x] [React Router](https://github.com/ReactTraining/react-router) 4.3
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

### Build tools

- [x] [Webpack](https://webpack.github.io) 4
  - [x] [Tree Shaking](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)
  - [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [x] [Typescript Loader](https://github.com/TypeStrong/ts-loader)
- [x] [CSS modules](https://github.com/css-modules/css-modules)
- [x] [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [x] [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [x] [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin)

## To dos
- [x] Server-Side Rendering
- [x] Static code analysis
- [x] Testing Frameworks
- [x] Local Storage compliance to GDPR, and reduce Xxs attack
- [x] Accessiblity - Keyboard focus via tabs, and outline with contrast on focus
- [x] Accessiblity - Focused or Hovered items should be able to narrate