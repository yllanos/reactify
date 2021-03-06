React App Boilerplate
=====================

Quickstart project template for learning React.

### Objective

This boilerplate is purposefully simple to show the minimal setup needed to create React projects with Webpack and Babel. It aims to be a starting point for learning React, with low cognitive load and as such avoids having many separate config files and advanced configuration options, while providing a solid foundation for new React projects.

### Usage
**Clone this repository**
```
git clone https://github.com/yllanos/reactify.git
```

**Install**
```
npm install
```

**Start the application in development mode**
```
npm start
```

Open http://localhost:8080 in your browser.

Static files are served from the `public` folder, project JavaScript files are bundled from the `app` folder.

**When ready, build for production**
```
npm run build
```

This will generate a minimized bundle.js file on the `public` folder.


### Missing Features

This boilerplate focuses solely on transforming and bundling javascript files - all other static files are served directly from the public folder without any processing. While useful for learning React, this setup doesn't use Webpack and Babel in their full capabilities - which include transforming and bundling projects assets (such as stylesheets), modularizing CSS, hot reloading and etc. Please refer to [Webpack](//webpack.github.io) and [Babel](//babeljs.io) docs to learn more. If you are looking for a feature-rich bootstrap for React, take a look at [webpack-express-boilerplate by christianalfoni](//github.com/christianalfoni/webpack-express-boilerplate).


### Dependencies

* React & React-DOM
* Webpack & webpack-dev-server
* Babel Core
* Babel Loader (With "es2015" and "react" presets)
