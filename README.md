# Vue-scaffold

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Mock data (under /mock)
/api/hello.json => /api/hello.json.js

``` js
module.exports = {
  success: true,
  msg: 'Welcome to Your Vue.js App'
}

// Using user-defined funciton
module.exports = function(req, res) {
  // http://expressjs.com/en/api.html
  res.json({
    success: true,
    msg: 'Welcome to Your Vue.js App'
  })
}

// Define different HTTP methods
module.exports = {
  __GET: {
    msg: 'Welcome to Your Vue.js App'
  },

  __POST: {
    success: 'true'
  }
}

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#Penyegaran
