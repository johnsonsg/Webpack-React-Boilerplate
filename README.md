# Webpack-React-Boilerplate
Setting Up Webpack with React

## What we are using
* Yarn
* Babel
* Webpack
## Ref
* webpack.js.org/configuration
## Steps
* Create Package.json file: yarn initi -y
* Add Dev Dependencies: yarn add -D webpack webpack-cli webpack-dev-server
* Create /src folder and then index.html file in it and index.js
* Create new File: webpack.config.js in root. See Ref.
* Add React and React-Dom: yarn add react react-dom
* Then add Scripts to package.json and include "watch"
** "watch": "webpack-dev-server --progress"
* Add Babel: yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader
* Configure Babel
* Test Watch: yarn watch