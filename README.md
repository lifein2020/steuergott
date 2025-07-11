# Steuergott

Responsive development home page of the “Steuergott” website.

## Functionality:
* modal pop-up of a YouTube video for the button “Video ansehen”
* responsive burger menu on smaller devices
* slider for the section “Das sagen unsere Kunden”

## Technology stack:
* HTML
* CSS
* BEM, file structure organization Nested
* JavaScript
* Webpack
* npm:

Webpack:
```bash
 npm i webpack --save-dev
```

Webpack interface:
```bash
 npm i webpack-cli --save-dev
```

Setting up a local server:
```bash
npm i webpack-dev-server --save-dev
```
Babel:
```bash
npm i @babel/core --save-dev
```
Babel preset:
```bash
npm i @babel/preset-env --save-dev
```
Polyfill library for Babel:
```bash
npm i core-js --save
```
Package that allows to connect Babel to Webpack:
```bash
npm i babel-loader --save-dev
 ```
Plugin for work with HTML-files:
 ``` bash
npm i html-webpack-plugin --save-dev
```

Packages for CSS processing
```bash
npm i css-loader --save-dev
npm i mini-css-extract-plugin --save-dev
```

PostCSS and two plugins:
```bash
npm i postcss-loader --save-dev
npm i autoprefixer --save-dev
npm i cssnano --save-dev
```
## Getting Started:

```bash
npm install
```

Builds a project for priduction into the dist folder:
```bash
npm run build
```

Run the development server:
```bash
npm run dev
```

[http://localhost:8080](http://localhost:8080) will be open on your browser to see the result.
